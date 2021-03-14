import React from 'react'
import css from './../Dialogs.module.css'


export const MessageItem = (props) => {
	return (
		<div className={css.message}>{props.message}</div>
	)
}




