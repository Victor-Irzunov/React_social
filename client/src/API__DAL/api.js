//? ->DAL<- (Data access layer) - уровень доступа к данным

import * as axios from 'axios'

//- Users
export const usersAPI = {
	getUsersAxios() { return axios.get('/api/users') },

	getPagesAxios(num) { return axios.get(`/api/users?page=${num}`) },

	tofollowAxios(id) { return axios.post(`/api/users/${id}`) },

	unFollowAxios(id) { return axios.delete(`/api/users/${id}`) }
}

//- Profile
export const getUsersByIdAxios = id => {
	axios.get(`/api/profiles/${id}`)
	console.log('dddddddddddddddddddddddddd')
}

//- Header
export const cookieLoginAxios = () => axios.get('/api/auth/login', { withCredentials: true })







// const instans = axios.create({baseURL:..., headers:...}) - можно испол для перед данных в запрос instans.get()