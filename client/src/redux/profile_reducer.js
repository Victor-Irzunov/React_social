//<   Profile

import { getUsersByIdAxios, getStatusByIdAxios, putStatusByIdAxios } from '../API__DAL/api'
// import * as axios from 'axios'


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const PROFILE_ONE = 'PROFILE_ONE'
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT'

const initialState = {
	postData: [
		{ id: 1, message: 'hi, how are you?', likesCouns: 12 },
		{ id: 2, message: 'It my first post', likesCouns: 4 },
	],
	newPostText: 'попа',
	profile: null,
	status: ''
}



const profileReducer = (state = initialState, action) => {                        //если state не передадут то будешь по умолчанию state = initialState

	switch (action.type) {
		case ADD_POST: {
			let new_post = {
				id: 3,
				message: state.newPostText,
				likesCouns: 0
			}
			let stateCopy = {
				...state,
				postData: [...state.postData]
			}
			stateCopy.postData.push(new_post)
			stateCopy.newPostText = ''
			return stateCopy
		}

		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state, newPostText: action.postMessage }
			return stateCopy
		}

		case PROFILE_ONE: {
			let profileUser = { ...state, oneUser: action.a }
			return profileUser
		}

		case UPDATE_NEW_STATUS_TEXT: {
			let stateStatusCopy = { ...state, status: action.status }
			return stateStatusCopy
		}

		default:
			return state
	}
}

//: ActionCreator  (это ф-ция которая возвращает action)
//! action - это обьект (как минимум есть св-во тип)
export const addPostActionCreator = () => ({ type: ADD_POST })
export const addNewpostActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, postMessage: text })
export const setProfile = a => {
	return { type: PROFILE_ONE, a }
}
export const addNewStatusActionCreator = status => {
	
	return  { type: UPDATE_NEW_STATUS_TEXT, status: status }
}



//_Санки:

//- getUserById
export const getUserByIdThunk = id => {
	return dispatch => {
		if (!id) id = ''
		getUsersByIdAxios(id).then(res => {
			dispatch(setProfile(res.data))
		})
	}
}



//-getStatus
export const getStatusThunk = id => {
	return dispatch => {
		getStatusByIdAxios(id).then(res => {
			dispatch(addNewStatusActionCreator(res.data.userStatus))
		})
	}
}




//-upDateStatus
export const upDateStatusThunk = (status, id) => {
	return dispatch => {
		putStatusByIdAxios(id, status).then(res => {
			if (res.data.resultCode === 0) {
				dispatch(addNewStatusActionCreator(status))
			}

		})
	}
}



export default profileReducer




