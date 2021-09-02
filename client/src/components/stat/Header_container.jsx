import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { setAuthHeaderAction, authHeaderThunk } from '../../redux/auth_reducer'


class HeaderContainer extends React.Component {

	componentDidMount = () => this.props.authHeaderThunk()
	
	render() {
		return (
			<Header {...this.props} />
		)
	}
}

const mapStateToProps = state => {
	return {
		password: state.auth.password,
		isAuth: state.auth.isAuth,
		email: state.auth.email,
		id: state.auth.id
	}
}
export default connect(mapStateToProps, { setAuthHeaderAction, authHeaderThunk })(HeaderContainer)

