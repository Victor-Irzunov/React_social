import React from 'react'
import { connect } from 'react-redux'
import { Navbar } from './Navbar'



//>  контейнерная компонента при испл. REACT-REDAX:



class NavBarClassContainer extends React.Component {

	//! Render:
	render = () => <Navbar all={this.props} />
}


let mapStateToProps = state => ({ isAuth: state.auth.isAuth })

const NavBarContainer_w = connect(mapStateToProps)(NavBarClassContainer)          //< вторые скобки вызвали ф-цию которую вернули первые скобки


export default NavBarContainer_w



//* connect -возвр по идогу новую контейнерную компоненту
