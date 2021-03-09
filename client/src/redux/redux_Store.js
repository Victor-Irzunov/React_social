import { combineReducers, createStore } from 'redux'

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

let store = createStore(reducers)

//!Не заывай!!!!!! Можно смотреть store
 window.store = store  //store.getState()

export default store