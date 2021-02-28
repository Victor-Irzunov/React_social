import React from 'react'
import logo from './icon_1.png'
import css from './Header.module.css'




export const Header = () => {

	return (
		<header className={css.header}>
			<img src={logo} />
		</header>
	)
}
