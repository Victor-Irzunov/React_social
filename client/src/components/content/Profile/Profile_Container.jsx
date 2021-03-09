
import React from 'react'
// import { connect } from 'react-redux'
import { Profile } from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setProfile} from '../../../redux/profile_reducer'
import { withRouter } from 'react-router'


class ProfileContainer extends React.Component{
//>
	componentDidMount = () => {
		let userId = this.props.match.params.id
		if(!userId) userId=''
		axios.get(`/api/profile/${userId}`)
			.then(res => {
			this.props.setProfile(res.data)
		})
}
//>
	render() {
		return (
			<Profile {...this.props} />
		)
	}
}

const mapStateToProps = state => {
	return {
		sss: state.profilePages
	}
}

let withUrlContainerCompoment = withRouter(ProfileContainer)        //закинит в props данные из URL(withRouter- подключает компонент к маршрутизатору.)

export default connect(mapStateToProps, {setProfile})(withUrlContainerCompoment)

//< componentDidMount - метод жизненого цикла