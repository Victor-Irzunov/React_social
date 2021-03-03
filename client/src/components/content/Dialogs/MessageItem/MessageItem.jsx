import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './../Dialogs.module.css'


export const MessageItem = (props) => {
	return (
		<div className={css.message}>{props.message}</div>
	)
}





//> NavLink - задача поменять URL в браузере без перезагрузки