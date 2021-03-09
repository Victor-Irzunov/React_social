import React from 'react'
import css from './ProfileInfo.module.css'
import { MyPosts } from '../MyPosts/MyPosts'


export const ProfileInfo = (props) => {

	if (!props.www) {
		return (
		<div className={css.box}>
			<div className={css.avatar}>
				<img src='https://via.placeholder.com/150' />
			</div>
			<div className={css.text}>
				Avatar
				</div>
			</div>
		)
	}
	return (
		<div className={css.box}>
			<div className={css.avatar}>
				<img src={props.www.user.photoUrl} />
			</div>
			<div className={css.text}>
				{props.www.user.fullName}
			</div>
		</div>
	)
}
//https://cs9.pikabu.ru/avatars/2293/x2293505-666315228.png https://via.placeholder.com
//https://via.placeholder.com/150



