const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN'

const initialState = {
	id: null,
	email: null,
	password: null,
	isAuth: false
}

const authReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case SET_AUTH_LOGIN:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default:
			return state
	}
}

export const authReduser = (id, email, password) => ({ type: SET_AUTH_LOGIN, data: { id, email, password } })

export default authReducer