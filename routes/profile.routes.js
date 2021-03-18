const { Router } = require('express')
const User = require('../models/User')
const config = require('config')
const chalk = require('chalk')
const router = Router()

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		res.json({ user })
	}
	catch (error) {
		res.status(500).json({
			message: 'Витя в Profile роуте ошибка'
		})
		console.log(chalk.red('Витя в Profile GET(/:id) роуте ошибка :', error))
	}
})


router.get('/', async (req, res) => {
	console.log('без id')
})


router.get('/status/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const userStatus = user.status
		res.json(
			{
				userStatus
			})
	}
	catch (error) {
		res.status(500).json({
			message: 'Витя в Profile роуте ошибка'
		})
		console.log(chalk.red('Витя в Profile роуте GET(/status/:id) ошибка :', error))
	}
})




router.put('/status/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const a = await req.body
		user.status = a.status
		await user.save()
		const userStatus = user.status
		if (a.status === '') {
			res.json(
				{
					resultCode: 1,
					message: 'Cтатус не обновился, где-то ошибка',
					data: {}
				}
			)
		}
		res.json(
			{
				resultCode: 0,
				message: 'Cтатус обновлён',
				userStatus,
			}
		)
	}
	catch (error) {
		res.status(500).json({
			message: 'Витя в Profile роуте ошибка'
		})
		console.log(chalk.red('Витя в  Profile роуте PUT ошибка :', error))
	}
})


module.exports = router