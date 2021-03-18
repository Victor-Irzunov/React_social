
import React from 'react'
import css from './ProfileInfo.module.css'
// import ProfileStatusContainer from './ProfileStatus/ProfileStatus_Container'
import { ProfileStatus } from './ProfileStatus/ProfileStatus.jsx'



export const ProfileInfo = props => {

	if (!props.www) {
		return (
			<div>
				<h1>ProfileInfo</h1>
				<div className={css.box}>
					<div className={css.avatar}>
						<img src='https://via.placeholder.com/150' />
					</div>
					<div className={css.text}>
						Avatar
				</div>
				</div>
				<ProfileStatus user={'Status'} />
			</div>
		)
	}
	console.log("🚀  _ file: ProfileInfo.jsx _ line 45 _ props.status", props.status)

	return (
		<div>
			<h1>ProfileInfo</h1>
			<div className={css.box}>
				<div className={css.avatar}>
					<img src={props.www.user.photoUrl} />
				</div>
				<div className={css.text}>
					<u>Name:</u> <b>{props.www.user.fullName}</b>
				</div>
				<div className={css.text}>
					<u>Subscription:</u> <b>{props.www.user.followed ? 'Подписан' : 'Не подписан'}</b>
				</div>
			</div>
			<ProfileStatus
				user={props.www.user}
				status={props.status}
				upDateStatus={props.upDateStatus}
			/>
		</div>

	)
}








//https://cs9.pikabu.ru/avatars/2293/x2293505-666315228.png
//https://via.placeholder.com/150




