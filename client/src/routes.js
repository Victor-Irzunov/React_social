//! определяю все наборы ссылок в стиле Реакта

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'

//path='/links' exact - путь до данной страници   и exact тобы откликался исключительно на данную ссылку
//-<Switch> ипрорт из react-router-dom
//-Route - ипрорт из react-router-dom
//-Redirect - ипрорт из react-router-dom


export const useRoutes = isAuthenticated => {

//++ роуты для чел в системе(есть токен)
	if (isAuthenticated) {

		//-набор jsx
		return (
			<Switch>
				<Route path='/links' exact>
					<LinksPage />
				</Route>

				<Route path='/create' exact>
					<CreatePage />
				</Route>

				<Route path='/detail/:id'>
					<DetailPage />
				</Route>

				<Redirect to="/create" />
			</Switch>
		)
	}

	//++ если чел не в системе
		//-набор jsx
	return (
		<Switch>
			<Route path="/" exact >
				<AuthPage />
			</Route>

			<Redirect to="/" />
		</Switch >
	)
}

