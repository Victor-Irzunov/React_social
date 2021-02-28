import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './../Dialogs.module.css'


export const DialogItem = (props) => {

	let path = `/dialogs/${props.obj.id}`

	return(
		<div className={css.dialog + ' ' + css.active}>

			<NavLink to={path}>{props.obj.name}</NavLink>
		</div>
	)
}



//> NavLink - задача поменять URL в браузере без перезагрузки