import { combineReducers, createStore } from 'redux'

import profileReducer from './profile_reducer'
import sidebarReducer from './sidebar_reducer'
import dialogsReducer from './dialogs_reducer'
import usersReducer from './users_reducer'



let reducers = combineReducers(
	{
		profilePages: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
	}
)

let store = createStore(reducers)

// console.log('store.getState(): ', store.getState())
// window.store = store  //store.getState()

export default store