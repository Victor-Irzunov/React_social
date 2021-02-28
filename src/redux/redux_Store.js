import { combineReducers, createStore } from 'redux'

import profileReducer from './profile_reducer'
import sidebarReducer from './sidebar_reducer'
import dialogsReducer from './dialogs_reducer'




let reducers = combineReducers(
	{
		profilePages: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer
	}
)

let store = createStore(reducers)


export default store