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
			message: 'Витя в роуте ошибка'
		})
		console.log(chalk.red('Витя в роуте ошибка :', error))
	}
})
router.get('/', async (req, res) => {
	console.log('без id')
	// res.json({
	// 	message: 'Ну нету userd и что?'
		
	// })
})

module.exports = router