import React from 'react'
import css from './Post.module.css'


export const Post = (props) => {

	return (
		<div className={css.block}>
			<img src="https://sun9-24.userapi.com/Zs4tRB-cHWjb-LHrkVZwqvRHUQuRc73eIzXP3w/kR9dgs8NUd4.jpg" />
			<div className={css.mini}>
				{props.message}
			</div>
			<div>Like:  {props.likesCouns}</div>
		</div>
	)
}
