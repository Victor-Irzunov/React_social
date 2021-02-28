
//<   Profile



const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
	postData: [
		{ id: 1, message: 'hi, how are you?', likesCouns: 12 },
		{ id: 2, message: 'It my first post', likesCouns: 4 },
	],
	newPostText: 'попа',
}



const profileReducer = (state = initialState, action) => {                        //если state не передадут то будешь по умолчанию state = initialState
	switch (action.type) {
		case ADD_POST:
			let new_postsData = {
				id: 3,
				message: state.newPostText,
				likesCouns: 0
			}
			state.postData.push(new_postsData)
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.postMessage
			return state
		default:
			return state
	}
}

//> ActionCreator  (это ф-ция которая возвращает action)
//! action - это обьект (как минимум есть св-во тип)
export const addPostActionCreator = () => ({
	type: ADD_POST
})

export const addNewpostActionCreator = text => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		postMessage: text
	}
}



export default profileReducer