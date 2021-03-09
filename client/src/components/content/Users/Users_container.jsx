import React from 'react'
import { followAction, unfollowAction, setUsersAction, setCurrentPageAction, toggleIsLoadingAction } from '../../../redux/users_reducer'
import Users1 from './Users1'
// import {Users} from './Users'
// import {Users2} from './Users2'
import { connect } from 'react-redux'
import * as axios from 'axios'
import { Loading } from '../../generalFunctions/Loading'


class UsersClassContainer extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }
	//>
	componentDidMount = () => {
		this.props.toggleIsLoad(true)
		
		axios.get('/api/users')
			.then(res => {
				this.props.toggleIsLoad(false)
				this.props.setUsers(res.data.result)
			})
			.catch(err => console.log('Витя ошибка err: ', err))
	}
	//>
	on = num => {
		this.props.toggleIsLoad(true)
		this.props.setNumPage(num)
		
		axios.get(`/api/users?page=${num}`)
			.then(res => {
				this.props.toggleIsLoad(false)
				this.props.setUsers(res.data.result)
			})
			.catch(err => console.log('Витя ошибка err: ', err))
	}
	//>
	render() {
		return <>
			{this.props.isLoading ? <Loading /> : null}
			<Users1
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				userss={this.props.userss}
				currentPage={this.props.currentPage}
				on={this.on}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
			/>
		</>
	}
}

//>
const mapStateToProps = state => {
	return {
		userss: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.docs.total,
		currentPage: state.usersPage.currentPage,
		isLoading: state.usersPage.isLoading
	}
}
const mapDispatchToProps = dispatch => {                           //можно засунуть в connect обьект и сократить
	return {
		follow: userId => dispatch(followAction(userId)),
		unfollow: userId => dispatch(unfollowAction(userId)),
		setUsers: usersAray => dispatch(setUsersAction(usersAray)),
		setNumPage: num => dispatch(setCurrentPageAction(num)),
		toggleIsLoad: isLoad => dispatch(toggleIsLoadingAction(isLoad))
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)


export default UsersContainer