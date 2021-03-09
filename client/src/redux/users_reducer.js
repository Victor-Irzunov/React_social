//++ reducer - это чистая ф-ция которая принисает action и если надо модифицирует(dispatch) страрый state по принципу (копии) и возвращает измененую копию или если не менял то возрщ не тронутый state
//> профессиональные разработчики начинают с бизнеса (BLL)
//(BLL)

//<  Users

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_ISLOADING = 'TOGGLE_ISLOADING'

let initialState = {
	users: [],
	docs: {},
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false                      //is.. -  boolen
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
				users: action.users.docs,             //< сам не понял
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

		default:
			return state
	}
}

//> ActionCreator  (это чистая ф-ция которая возвращает action)
//! action - это обьект (как минимум есть св-во тип)

export const followAction = userId => ({ type: FOLLOW, userId })
export const unfollowAction = userId => ({ type: UNFOLLOW, userId })
export const setUsersAction = users => ({ type: SET_USERS, users })
export const toggleIsLoadingAction = isLoad => ({type: TOGGLE_ISLOADING, isLoad})
export const setCurrentPageAction = currentPage => {
	return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}
//>


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