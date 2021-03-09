import React from 'react'
import logo from './icon_1.png'
import css from './Header.module.css'
import { NavLink } from 'react-router-dom'




export const Header = (props) => {

	return (
		<header className={css.header}>
			<img src={logo} />

			<div className={css.linkLogin}>
				{props.isAuth && props.password ? <h3>{props.email}</h3> : <NavLink to={'/login'}>LOGIN</NavLink>}
			</div>
		</header>
	)
}
