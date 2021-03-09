import React from 'react'
import css from '../../components/content/Users/Users.module.css'


export const Loading = () => {
	return <div className={css.lds__roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}