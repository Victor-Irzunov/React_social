import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Users.module.css'


const Users1 = props => {
	let pageCount = Math.ceil(props.all.totalUsersCount / props.all.pageSize)

	const pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div className={css.numPage}>
				{pages.map(num => {
					return <span className={props.all.currentPage === num ? css.selectPage : ''} onClick={() => { props.on(num) }} key={num}>{num}</span>
				})}
			</div>
			{
				props.all.userss.map(obj =>
					<div className={css.block} key={obj.id}>
						<div className={css.col}>
							<div>
								<NavLink to={`/profile/${obj.id}`}>
									<img src={obj.photoUrl} className={css.foto} />
								</NavLink>
							</div>
							<div>
								{
									obj.followed
										?
										<button
											onClick={() => { props.unfol_low(obj.id) }}
											disabled={props.all.isLoadingSubscription.some(id => id === obj.id)}
										>
											{
												props.all.isLoadingSubscription.some(id => id === obj.id)
													?
													<img src={'https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif'} className={css.loading} />
													: null
											}
											{
												props.all.isLoadingSubscription.some(id => id === obj.id)
													? 'подождите'
													: 'Unfollow'
											}
										</button>
										:
										<button
											onClick={() => { props.fol_low(obj.id) }}
											disabled={props.all.isLoadingSubscription.some(id => id === obj.id)}
										>
											{
												props.all.isLoadingSubscription.some(id => id === obj.id)
													?
													<img src={'https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif'} className={css.loading} />
													: null
											}
											{
												props.all.isLoadingSubscription.some(id => id === obj.id)
													? 'подождите'
													: 'Follow'
											}
										</button>
								}
							</div>
						</div>
						<div className={css.user__messages}>
							<div>
								<h3>{obj.fullName}</h3>
								<div>{obj.status}</div>
							</div>
							<div>
								<div>{obj.location}</div>
								<div className={css.city}>{obj.location}</div>
							</div>
						</div>
					</div>)
			}
		</div>
	)
}

export default Users1


//< Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
//> NavLink - задача поменять URL в браузере без перезагрузки


	// axios.post('/api/users', {
	// 	followed: false,
	// 	fullName: 'Marat',
	// 	status: 'Ho ho-ha',
	// 	email: 'victor@gmail.com',
	// 	location: 'Berlin',
	// 	photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/111343/pub_5d1e64637fa9f600ad62247e_5d1e663e7b832900ad7f6873/scale_1200'
	// }).then(res => {
	// 	console.log(res);
	// 	console.log(res.data);
	// })

	// if (props.users.length === 0) {
	// 	fetch('/api/users')
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			console.log(data.users)
	// 			props.setUsers(data.users)
	// 		})
	// }






























// , {
// 	method: 'GET',
// 	mode: 'cors',
// 	headers: { 'Access-Control-Allow-Origin': true }
// }



	// if (props.users.length === 0) {
	// 	axios.get()
	// 	props.setUsers([{
	// 		id: 1,
	// 		followed: true,
	// 		fullName: 'Gogi',
	// 		status: 'I am a boss',
	// 		location:
	// 			{ city: 'Minsk', country: 'Belarus' },
	// 		photoUrl: 'https://sun9-24.userapi.com/Zs4tRB-cHWjb-LHrkVZwqvRHUQuRc73eIzXP3w/kR9dgs8NUd4.jpg'
	// 	},
	// 	{
	// 		id: 2,
	// 		followed: true,
	// 		fullName: 'Ben',
	// 		status: 'Hi hi-hi',
	// 		location:
	// 			{ city: 'Moscow', country: 'Russia' },
	// 		photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5cd05cf77dea6f00b30de644_5cd061bdeb28ac00aea4e0e9/scale_1200'
	// 	},
	// 	{
	// 		id: 3,
	// 		followed: false,
	// 		fullName: 'Nik',
	// 		status: 'hello boss',
	// 		location:
	// 			{ city: 'Berlin', country: 'Germany' },
	// 		photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/111343/pub_5d1e64637fa9f600ad62247e_5d1e663e7b832900ad7f6873/scale_1200'
	// 	},
	// 	{
	// 		id: 4,
	// 		followed: false,
	// 		fullName: 'Marat',
	// 		status: 'I am a boss too',
	// 		location:
	// 			{ city: 'NewYork', country: 'U.S.A' },
	// 		photoUrl: 'https://yt3.ggpht.com/a/AATXAJxjTQaW6s4jb6yIpqYzrziERM73mzvkwcQuEedM=s900-c-k-c0x00ffffff-no-rj'
	// 	},])
	// }