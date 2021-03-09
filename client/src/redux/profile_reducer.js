
//<   Profile



const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const PROFILE_ONE = 'PROFILE_ONE'

const initialState = {
	postData: [
		{ id: 1, message: 'hi, how are you?', likesCouns: 12 },
		{ id: 2, message: 'It my first post', likesCouns: 4 },
	],
	newPostText: 'попа',
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
			let profileUser = { ...state, profile: action.a }

			return profileUser
		}
		default:
			return state
	}
}

//> ActionCreator  (это ф-ция которая возвращает action)
//! action - это обьект (как минимум есть св-во тип)
export const addPostActionCreator = () => ({ type: ADD_POST })
export const addNewpostActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, postMessage: text })
export const setProfile = (a) => ({ type: PROFILE_ONE, a })


export default profileReducer