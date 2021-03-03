import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux_Store'
import { Provider } from 'react-redux'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'


//рендеринг Всего Дерева
// let rerender_Entire_Tree = (state) => {



	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	)




// }
// rerender_Entire_Tree()



//// redux(coвский) store когда уведомоляет подпсчиков НЕ ПЕРЕДАЁТ state
// store.subscribe(() => {
// 	let state = store.getState()
// 	rerender_Entire_Tree(state)
// })

reportWebVitals()

//* .bind - возврщает контекст this (не вызывает ф-цию) возврщ новую ф-цию /тк addPost_f2 не вызываем/ 20:52 /https://www.youtube.com/watch?v=Bq_tmt-hRn0



// state={state} dispatch={store.dispatch.bind(store)} store={store}








