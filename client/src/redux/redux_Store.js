import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import profileReducer from './profile_reducer'
import sidebarReducer from './sidebar_reducer'
import dialogsReducer from './dialogs_reducer'
import usersReducer from './users_reducer'
import authReducer from './auth_reducer'



let reducers = combineReducers(
	{
		profilePages: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer
	}
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

//!Не заывай!!!!!! Можно смотреть store
 window.store = store  //*window.store.getState()

export default store

//: apply - применять, использовать