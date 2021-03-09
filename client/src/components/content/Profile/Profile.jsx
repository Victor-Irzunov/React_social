import React from 'react'
import css from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPosts_Container.jsx'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'


export const Profile = (props) => {

	return (
		<div className=''>
			<div className='images'>
				<img src='https://www.spain-internship.com/images/USA-internship2.png' />
			</div>
			<ProfileInfo www={props.sss.profile} />
			<MyPostsContainer />
		</div>
	)
}