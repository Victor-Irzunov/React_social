import React from 'react'
import { addPostActionCreator, addNewpostActionCreator } from '../../../../redux/profile_reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'

//* то что она контейнерная компонента ей разрешено быть не чистой, не тупой, ей разрешено знать излишние знания и задача:  удовлетворить нужды презентационной компонен.(отрисовать през компн.)


//>  контейнерная компонента при испл. REACT-REDAX:
//забываем про store

let mapStateToProps = state => {
	return {
		postData: state.profilePages.postData,
		newPostText: state.profilePages.newPostText
	}
}

let mapDispatchToProps = dispatch => {
	return {
		updateNewPostText: text => dispatch(addNewpostActionCreator(text)),

		addPost: () => dispatch(addPostActionCreator())
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)          //< вторые скобки вызвали ф-цию которую вернули первые скобки


export default MyPostsContainer



//< (MyPosts) перерисуйся когда изменится state.profilePages.postData или state.profilePages.newPostText



//++Consumer - Потребитель
//<   resolve(англ)-разрешить
//<   empty(англ)-пустой 
//()   props(англ)-реквизит
//++   found(англ)-нашел
//*   layer(англ)- слой
//'   Compiled -составленный, подготовленный)
//>   build- строить

//------------------------------------------------------------------
// export const MyPostsContainer = (props) => {

// 	return (
// 		<Context.Consumer>
// 			{
// 				store => {
// 					let state = store.getState()
// 					const addPost = () => {
// 						//// debugger
// 						store.dispatch(addPostActionCreator())
// 					}
// 					const on = (text) => {
// 						//// debugger
// 						let action = addNewpostActionCreator(text)
// 						store.dispatch(action)
// 					}
// 					return <MyPosts
// 						updateNewPostText={on}
// 						addPost={addPost}
// 						postData={state.profilePages.postData}
// 						newPostText={state.profilePages.newPostText} />
// 				}
// 			}
// 		</Context.Consumer>
// 	)
// }




