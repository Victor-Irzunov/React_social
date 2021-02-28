import React from 'react'
import css from './ProfileInfo.module.css'
import { MyPosts } from '../MyPosts/MyPosts'


export const ProfileInfo = () => {
	return (
		<div className={css.box}>
			<div className={css.avatar}>
				<img src='https://cs9.pikabu.ru/avatars/2293/x2293505-666315228.png' />
			</div>
			<div className={css.text}>
				Avatar
				</div>
		</div>
	)
}
