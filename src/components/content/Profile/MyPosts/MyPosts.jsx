import React from 'react'
import css from './MyPosts.module.css'
import { Post } from './Post/Post.jsx'



export const MyPosts = (props) => {

	const postElement = props.postData.map(obj =>(
		<Post message={obj.message} likesCouns={obj.likesCouns} key={obj.id} />
	))

	const textArea = React.createRef()


	const onAddPost = () => {
		props.addPost()
	}

	const on = () => {
		const text = textArea.current.value
		props.updateNewPostText(text)
	}
	
	
	return (
		<div className={css.my_posts}>
			<div>
				<h2>My posts</h2>
				<div>
					<textarea ref={textArea} onChange={on} value={props.newPostText} />
					<br />
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={css.mess}>

				{postElement}

			</div>
		</div>
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

