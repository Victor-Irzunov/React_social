//++ оставил для примера




import profileReducer from './profile_reducer'
import dialogsReducer from './dialogs_reducer'
import sidebarReducer from './sidebar_reducer'


let store = {
	_state: {
		//'Dialog
		dialogsPage: {
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
		},
		//'Profile
		profilePages: {
			postData: [
				{ id: 1, message: 'hi, how are you?', likesCouns: 12 },
				{ id: 2, message: 'It my first post', likesCouns: 4 },
			],
			newPostText: 'попа',
		},
		sidebar: {}
	},
	_rerender_Entire_Tree() {
		console.log('-----')
	},
	getState() {
		// debugger
		return this._state
	},
	//> подписка и при изменении перерисовка:
	subscribe(observer) {
		this._rerender_Entire_Tree = observer
	},
	//< dispatch:
	dispatch(action) {                             //! action - это обьект (как минимум есть св-во тип)

		this._state.profilePages = profileReducer(this._state.profilePages, action)

		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._rerender_Entire_Tree(this._state)
	}
}


//Full stack developer  фул стэк ди'велэпэ
export default store

window.store = store

//++ subscribe-  подписаться
//* observer - наблюдатель
//* dispatch - отправка
//* call - вызов

//( window.state = state  можно посмотреть в консоле

//? Ф-ция REDUCER - это чистая ф-ция которая принимает state, action и если нужно применяет action к этому state и возврощает новый newstate либо же возрщ не изменнёный state

