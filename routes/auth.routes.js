const { Router } = require('express')
const UserLogin = require('../models/AuthUser')
const chalk = require('chalk')
const router = Router()

router.get('/login', async (req, res) => {
	try {
		const a = req.cookies
		//// res.cookie('cook', 'ok');
		const user = await UserLogin.findOne({ cookies: a })
		if (user !== null) {
			if (JSON.stringify(user.cookies) === JSON.stringify(a)) {
				return res.json({
					user,
					message: 'узнаю'
				})
			}
		} else {
			res.json({
				message: 'не узнаю'
			})
		}
		
		
	}
	catch (e) {
		res.status(500).json(
			{
				message: "ошибка в auth.routes GET"
			}
		)
		console.log(chalk.red('ошибка в "auth.routes" GET: ', e))
	}
})



router.post('/login', async (req, res) => {
	try {
		const { email, password, cookies } = req.body
		const new_user = new UserLogin({ email, password, cookies })
      console.log("🚀  _ file: auth.routes.js _ line 50 _ router.post _ new_user", new_user)
		await new_user.save()
		res.status(201).json(
			{
				message: 'Пользователь создан'
			}
		)
	}
	catch (err) {
		res.status(500).json(
			{
				message: "Что-то пошло не так, попробуйте снова"
			}
		)
		console.log(chalk.red('ошибка в "auth.routes" POST register: ', err))
	}
})

module.exports = router

