//( AJAX подгрузка данных)


import React, { useEffect, useState } from 'react'
import css from './Users.module.css'
import * as axios from 'axios'

export const Users2 = props => {

	const [photos, setPhotos] = useState([])                                                                 //что будет массив
	const [currentPage, setCurrentPage] = useState(1)                                                        //currentPage - ноер текущей страницы по умолчстр.1
	const [fetching, setFetching] = useState(true)                                                            //истина в том случ кода подгружаем данные 	//fetching состояние между запросом и ответом
	const [totalCount, setTotalCount] = useState(0)                                                           //если фото закончались  

	useEffect(() => {
		if (fetching) {                                                                                      //каждый раз когда менят состоян запрос будет отробатывать (когда fetching === true)
			axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=15&_page=${currentPage}`)
				.then(res => {
					setPhotos([...photos, ...res.data])                                                            //создаю новый массив	
					setCurrentPage(prevState => prevState + 1)                                                   //и полсе того как данные загрузились меняем страницу
					setTotalCount(res.headers['x-total-count'])                                                  //x-total-count: 5000 (и тк есть тирэ - лучше получ через квадр скобки)
				})
				.finally(() => setFetching(false))                                                              //выпол в любом случае (ошибка или успех)
		}
	}, [fetching])                                                                                            //передаю состояние(зависимость)

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return function () {
			document.removeEventListener('scroll', scrollHandler)                                                //если добовляешь слушатель, потом его гадо удалить
		}
	}, [])                                                                                                     //один раз

	const scrollHandler = (event) => {
		if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100 && photos.length === totalCount) {
			setFetching(true)
			//// console.log('scroll')
		}
		// console.log('scrollHeight: ', event.target.documentElement.scrollHeight)                             //общая высотастраницы с учетом скрола
		// console.log('scrollTop: ', event.target.documentElement.scrollTop)                                   //текущ полож скрола от верха страницы
		// console.log('innerHeight: ', window.innerHeight)                                                      //высотабраузера(видимая часть)
	}

	return (
		<div>
			{
				photos.map(obj =>
					<div className={css.block} key={obj.id}>
						<div className={css.col}>
							<div>
								<img src={obj.thumbnaiUrl} className={css.foto} />
							</div>
							{/* <div>
								{obj.followed
									?
									<button onClick={() => { props.unfollow(obj.id) }}>Unfollow</button>
									:
									<button onClick={() => { props.follow(obj.id) }}>Follow</button>
								}
							</div> */}
						</div>

						<div className={css.user__messages}>
							<div>
								<h3>{obj.title}</h3>
								{/* <div>{obj.status}</div> */}
							</div>
							<div>
								<div>{obj.id}</div>
								{/* <div className={css.city}>{obj.location}</div> */}
							</div>
						</div>
					</div>)
			}
		</div>
	)
}





	// 	axios.post('/api/users', {
	// 	followed: false,
	// 	fullName: 'Kok',
	// 	status: 'qweeri',
	// 	email: 'qwert@tut.by',
	// 	location: 'NewYork',
	// 	photoUrl: 'https://i08.fotocdn.net/s108/50451820ffaebe03/user_l/2386492670.jpg'
	// }).then(res => {
	// 	console.log(res);
	// 	console.log(res.data);
	// })


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