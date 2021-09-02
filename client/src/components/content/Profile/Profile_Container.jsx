import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { Profile } from './Profile'
import { getUserByIdThunk, getStatusThunk, upDateStatusThunk } from '../../../redux/profile_reducer'


class ProfileContainer extends React.Component {

	componentDidMount = () => {
		this.props.getUserByIdThunk(this.props.match.params.id)
		this.props.getStatusThunk(this.props.match.params.id)
	}

	render() {
		return (
			<Profile
				{...this.props}
				status={this.props.status}
				upDateStatus={this.props.upDateStatusThunk}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		sss: state.profilePages.oneUser,
		status: state.profilePages.status,
	}
}

let withUrlContainerCompoment = withRouter(ProfileContainer)        //закинит в props данные из URL(withRouter- подключает компонент к маршрутизатору.)

export default connect(mapStateToProps,
	{ getUserByIdThunk, getStatusThunk, upDateStatusThunk }
)(withUrlContainerCompoment)





//< componentDidMount - метод жизненого цикла


// //---HOC
// const AuthRedirectComponent = (props) => {
// 	if (!props.isAuth) return <Redirect to={'/login'} />
// return <ProfileContainer {...props} />
// }