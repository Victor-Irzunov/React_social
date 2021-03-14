
import { cookieLoginAxios } from '../API__DAL/api'


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

//> ActionCreator
export const setAuthHeaderAction = (id, email, password) => ({ type: SET_AUTH_LOGIN, data: { id, email, password } })


//(Санки):
export const authHeaderThunk = () => {
	return dispatch => {
		cookieLoginAxios()
			.then(res => {
				if (res.data.user) {
					let { id, email, password } = res.data.user
					dispatch(setAuthHeaderAction(id, email, password))
				}
			})
	}
}




export default authReducer