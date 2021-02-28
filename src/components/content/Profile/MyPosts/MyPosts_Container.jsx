import React from 'react'
import { addPostActionCreator, addNewpostActionCreator } from '../../../../redux/profile_reducer'
import { MyPosts } from './MyPosts'

//* то что она контейнерная компонента ей разрешено быть не чистой, не тупой, ей разрешено знать излишние знания и задача:  удовлетворить нужды презентационной компонен.(отрисовать през компн.)

export const MyPostsContainer = (props) => {

	let state = props.store.getState()

	const addPost = () => {
		//// debugger
		props.store.dispatch(addPostActionCreator())

	}

	const on = (text) => {
		// debugger
		let action = addNewpostActionCreator(text)
		props.store.dispatch(action)
	}


	return (
		<MyPosts
			updateNewPostText={on}
			addPost={addPost}
			postData={state.profilePages.postData}
			newPostText={state.profilePages.newPostText} />
	)
}





//<   resolve(англ)-разрешить
//<   empty(англ)-пустой 
//()   props(англ)-реквизит
//++   found(англ)-нашел
//*   layer(англ)- слой
//'   Compiled -составленный, подготовленный)
//>   build- строить
//?    дела 

