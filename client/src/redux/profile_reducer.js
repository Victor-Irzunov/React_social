
//<   Profile

import { getUsersByIdAxios } from '../API__DAL/api'
import * as axios from 'axios'


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const PROFILE_ONE = 'PROFILE_ONE'
// const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT'

const initialState = {
	postData: [
		{ id: 1, message: 'hi, how are you?', likesCouns: 12 },
		{ id: 2, message: 'It my first post', likesCouns: 4 },
	],
	newPostText: 'попа',
	// newStatusText: 'пиши',
	profile: null
}



const profileReducer = (state = initialState, action) => {                        //если state не передадут то будешь по умолчанию state = initialState
	//в dialog сделал по другому - локоничней
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

		// case UPDATE_NEW_STATUS_TEXT: {
		// 	let stateStatusCopy = { ...state, newStatusText: action.text }
		// 	return stateStatusCopy
		// }
		default:
			return state
	}
}

//> ActionCreator  (это ф-ция которая возвращает action)
//! action - это обьект (как минимум есть св-во тип)
export const addPostActionCreator = () => ({ type: ADD_POST })
export const addNewpostActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, postMessage: text })
export const setProfile = a => {
	return { type: PROFILE_ONE, a }
}
// export const addNewStatusActionCreator = text => ({ type: UPDATE_NEW_STATUS_TEXT, newStatusText: text })

//>


//.Санки:

//- getUserByIdThunk
export const getUserByIdThunk = id => {
	return dispatch => {
		if (!id) id = ''
		axios.get(`/api/profiles/${id}`).then(res => {
				dispatch(setProfile(res.data))
			})
	}
}



export default profileReducer