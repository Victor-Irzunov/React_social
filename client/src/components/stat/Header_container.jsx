import React from 'react'
import { Header } from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { authReduser } from '../../redux/auth_reducer'

class HeaderContainer extends React.Component {

	componentDidMount() {
		axios.get('/api/auth/login', { withCredentials: true })
			.then(res => {
				if (res.data.user) {
					let { id, email, password } = res.data.user
					this.props.authReduser(id, email, password)
				}
			})
	}

	render() {
		return (
			<Header {...this.props} />
		)
	}
}


const mapStateToProps = state => ({
	password: state.auth.password,
	isAuth: state.auth.isAuth,
	email: state.auth.email
})

export default connect(mapStateToProps, { authReduser })(HeaderContainer)

