
//<   Dialog  

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE_NEW_DIALOG_TEXT'

const initialState = {
	dialogData: [
		{ id: 1, name: 'Dima' },
		{ id: 2, name: 'Marat' },
		{ id: 3, name: 'Masha' },
		{ id: 4, name: 'Victor' },
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hi -hi-ih' },
		{ id: 3, message: 'Hi' },
		{ id: 4, message: 'Hi' },
	],
	newDialogText: ''
}

//* Reducer
const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_DIALOG_TEXT:
			return {
				...state,
				newDialogText: action.body
			}

		case SEND_MESSAGE:
			let body = state.newDialogText

			return {
				...state,
				messages: [...state.messages, { id: 5, message: body }],                  //вместо push()
				newDialogText: ''
			}

		default:
			return state
	}
}
//*

//> ActionCreator:  (это ф-ция которая возвращает action)
//! action - это обьект (как минимум есть св-во тип)

export const sendMessage = () => ({type: SEND_MESSAGE})
export const newDialog = body => {
	return {
		type: UPDATE_NEW_DIALOG_TEXT,
		body: body
	}
}
//>


export default dialogsReducer