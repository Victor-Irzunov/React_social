
//++ оставил для примера



//передовать ф-ции сквозь др компоненты

import React from 'react'


const Context = React.createContext(null)


export default Context

	//и в index 
{/* <Context.Provider value={store}>
<App />
</Context.Provider> */}



{/* <Context.Consumer>{
	store =>
}</Context.Consumer> */}








	//( можно ещё:)
	export const Provider = props => {
		return (
			<Context.Provider value={props.store}>
				{props.children}
			</Context.Provider>
		)
	}

	//и в index 
	// <Provider value = { store } >
	// 	<App />
	// </Provider>