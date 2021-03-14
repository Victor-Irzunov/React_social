import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
	follow, unfollow, getUsersThunkCreator, getPagesThunkCreator,
	followThunkCreator, unFollowThunkCreator
} from '../../../redux/users_reducer'
import Users1 from './Users1'
// import {Users} from './Users'
// import {Users2} from './Users2'
import { withAuthRedirect } from '../../../HOC/AuthRedirect'
import { Loading } from '../../generalFunctions/Loading'


class UsersClassContainer extends React.Component {
	//// constructor(props) {
	//// 	super(props)
	//// }
	//-componentDidMount
	componentDidMount = () => this.props.getUsersThunkCreator()

	//-on
	on = num => this.props.getPages(num)

	//-follow
	follow = id => this.props.tofollow(id)

	//-unfollow
	unfollow = id => this.props.unfollow(id)


	//! Render:
	render() {
		return <>
			{this.props.isLoading ? <Loading /> : null}
			<Users1
				all={this.props}
				on={this.on}
				fol_low={this.follow}
				unfol_low={this.unfollow}
			/>
		</>
	}
}



const mapStateToProps = state => {
	return {
		userss: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.docs.total,
		currentPage: state.usersPage.currentPage,
		isLoadingSubscription: state.usersPage.isLoadingSubscription,
	}
}

export default compose(                            //* Compose (Объединяет функции справа налево.)
	connect(mapStateToProps,
		{
			follow,
			unfollow,
			getUsersThunkCreator,
			getPages: getPagesThunkCreator,
			tofollow: followThunkCreator,
			unfollow: unFollowThunkCreator
		}
	),
	withAuthRedirect                                     //* H.O.C.
)(UsersClassContainer)












//* ---HOC
// let AuthRedirectComponent = withAuthRedirect(UsersClassContainer)


//< Compose
// compose(
// 	connect(mapStateToProps,
// 		{
// 			follow,
// 			unfollow,
// 			getUsersThunkCreator,
// 			getPages: getPagesThunkCreator,
// 			tofollow: followThunkCreator,
// 			unfollow: unFollowThunkCreator
// 		}
// 	),
// 	withAuthRedirect
// )(UsersClassContainer)


// const UsersContainer = connect(mapStateToProps,
// 	{
// 		follow,
// 		unfollow,
// 		getUsersThunkCreator,
// 		getPages: getPagesThunkCreator,
// 		tofollow: followThunkCreator,
// 		unfollow: unFollowThunkCreator
// 	}
// )(AuthRedirectComponent)


// export default UsersContainer



// const mapDispatchToProps = dispatch => {           //<засунул в connect обьект и сократил
// 	return {
// 		follow: userId => dispatch(follow(userId)),
// 		unfollow: userId => dispatch(unfollow(userId)),
// 		setUsers: usersAray => dispatch(setUsers(usersAray)),
// 		setNumPage: num => dispatch(setNumPage(num)),
// 		toggleIsLoad: isLoad => dispatch(toggleIsLoad(isLoad)),
// 		expectIsLoad: (bool, id) => dispatch(expectIsLoad(bool, id))}}