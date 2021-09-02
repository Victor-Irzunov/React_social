import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { Form, Field } from 'react-final-form'
import profileReducer from './profile_reducer'
import sidebarReducer from './sidebar_reducer'
import dialogsReducer from './dialogs_reducer'
import usersReducer from './users_reducer'
import authReducer from './auth_reducer'
// import LoginForm from '../components/content/Login/Login'


let reducers = combineReducers(
	{
		profilePages: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer,
		// form: LoginForm
	}
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

//!Не заывай!!!!!! Можно смотреть store
window.store = store  //*  window.store.getState()

export default store

//: apply - применять, использовать