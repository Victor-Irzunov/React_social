const { Router } = require('express')
const User = require('../models/User')
const config = require('config')
const chalk = require('chalk')
const router = Router()

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
      console.log("🚀  _ file: profile.routes.js _ line 10 _ router.get _ user", user)
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
})



module.exports = router