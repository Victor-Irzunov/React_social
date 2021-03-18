//++ reducer - это чистая ф-ция которая принисает action и если надо модифицирует(dispatch) страрый state по принципу (копии) и возвращает измененую копию или если не менял то возрщ не тронутый state. это функции, которые изменяют состояние и делят его на мелкие, модульные и управляемые части.
//< профессиональные разработчики начинают с бизнеса (BLL)

//.> _________________B.L.L.___________________

//_  UsersReducer
//:  UsersReducer
//*  UsersReducer
//=  UsersReducer
//.  UsersReducer



import { usersAPI } from '../API__DAL/api'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_ISLOADING = 'TOGGLE_ISLOADING'
const EXPECT_ISLOADING = 'EXPECT_ISLOADING'

let initialState = {
	users: [],
	docs: {},
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false,                      //.is.. -  boolen
	isLoadingSubscription: [],
}

const usersReducer = (state = initialState, action) => {  //если state не передадут то будешь по умолчанию state = initialState
	switch (action.type) {

		case FOLLOW:
			return {
				...state,
				users: state.users.map(obj => {
					if (obj.id === action.userId) {
						return { ...obj, followed: true }
					}
					return obj
				}),
				location: { ...state.location }
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(obj => {
					if (obj.id === action.userId) {
						return { ...obj, followed: false }
					}
					return obj
				}),
				location: { ...state.location }
			}

		case SET_USERS:
			let a = {
				...state,
				users: action.users.docs,             //. сам не понял
				docs: { ...state.docs, ...action.users }
			}
			return a

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

		case TOGGLE_ISLOADING:
			return {
				...state,
				isLoading: action.isLoad
			}

		case EXPECT_ISLOADING:
			return {
				...state,
				isLoadingSubscription: action.bool
					? [...state.isLoadingSubscription, action.id]
					: state.isLoadingSubscription.filter(id => id != action.id)
			}

		default:
			return state
	}
}

//: ActionCreator _________ действие, которое было вызвано:
//! action - это обьект,чистая ф-ция которая возвращает action (как минимум есть св-во тип)

export const follow = userId => ({ type: FOLLOW, userId })
export const unfollow = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const toggleIsLoad = isLoad => ({ type: TOGGLE_ISLOADING, isLoad })
export const expectIsLoad = (bool, id) => ({ type: EXPECT_ISLOADING, bool, id })
export const setNumPage = currentPage => {
	return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}


//__Санки __________ Middleware асинхранно:
//- componentDidMount
export const getUsersThunkCreator = () => {
	return dispatch => {
		dispatch(toggleIsLoad(true))

		usersAPI.getUsersAxios()
			.then(res => {
				dispatch(toggleIsLoad(false))
				dispatch(setUsers(res.data.result))
			})
			.catch(err => console.log('Витя ошибка err: ', err))
	}
}

//- on
export const getPagesThunkCreator = num => {
	return dispatch => {
		dispatch(toggleIsLoad(true))
		dispatch(setNumPage(num))

		usersAPI.getPagesAxios(num)
			.then(res => {
				dispatch(toggleIsLoad(false))
				dispatch(setUsers(res.data.result))
			})
			.catch(err => console.log('Витя ошибка err: ', err))
	}
}

//-follow
export const followThunkCreator = id => {
	return dispatch => {
		dispatch(expectIsLoad(true, id))

		usersAPI.tofollowAxios(id)
			.then(res => {
				dispatch(follow(id))
				dispatch(expectIsLoad(false, id))
				console.log('ответ: ', res.data)
			})
	}
}

//-unfollow
export const unFollowThunkCreator = id => {
	return dispatch => {
		dispatch(expectIsLoad(true, id))

		usersAPI.unFollowAxios(id)
			.then(res => {
				dispatch(follow(id))
				dispatch(expectIsLoad(false, id))
				console.log('ответ: ', res.data)
			})
	}
}


export default usersReducer
















// {
		// 	id: 1,
		// 	followed: true,
		// 	fullName: 'Gogi',
		// 	status: 'I am a boss',
		// 	location:
		// 		{ city: 'Minsk', country: 'Belarus' },
		// 	photoUrl: 'https://sun9-24.userapi.com/Zs4tRB-cHWjb-LHrkVZwqvRHUQuRc73eIzXP3w/kR9dgs8NUd4.jpg'
		// },
		// {
		// 	id: 2,
		// 	followed: true,
		// 	fullName: 'Ben',
		// 	status: 'Hi hi-hi',
		// 	location:
		// 		{ city: 'Moscow', country: 'Russia' },
		// 	photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5cd05cf77dea6f00b30de644_5cd061bdeb28ac00aea4e0e9/scale_1200'
		// },
		// {
		// 	id: 3,
		// 	followed: false,
		// 	fullName: 'Nik',
		// 	status: 'hello boss',
		// 	location:
		// 		{ city: 'Berlin', country: 'Germany' },
		// 	photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/111343/pub_5d1e64637fa9f600ad62247e_5d1e663e7b832900ad7f6873/scale_1200'
		// },
		// {
		// 	id: 4,
		// 	followed: false,
		// 	fullName: 'Marat',
		// 	status: 'I am a boss too',
		// 	location:
		// 		{ city: 'NewYork', country: 'U.S.A' },
		// 	photoUrl: 'https://yt3.ggpht.com/a/AATXAJxjTQaW6s4jb6yIpqYzrziERM73mzvkwcQuEedM=s900-c-k-c0x00ffffff-no-rj'
		// },