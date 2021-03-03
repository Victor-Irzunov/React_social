import React from 'react'
import { followAction, unfollowAction, setUsersAction } from '../../../redux/users_reducer'
import { Users } from './Users'
import { connect } from 'react-redux'


const mapStateToProps = state => {
	return {
		userss: state.usersPage.users
	}
}
const mapDispatchToProps = dispatch => {
	return {
		follow: userId => dispatch(followAction(userId)),
		unfollow: userId => dispatch(unfollowAction(userId)),
		setUsers: usersAray => dispatch(setUsersAction(usersAray)),
		}
	}

	const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


	export default UsersContainer
