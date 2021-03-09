const { Router } = require('express')
const User = require('../models/User')
const config = require('config')
const chalk = require('chalk')
const router = Router()



router.get('/', async (req, res) => {
	try {
		User.paginate({}, { limit: 5, page: req.query.page })
			.then(result => {
				res.status(200).json({
					result,
				})
			})
	}
	catch (error) {
		res.status(500).json({
			message: 'Витя в роуте ошибка'
		})
		console.log(chalk.red('Витя в роуте ошибка :', error))
	}
})


router.post('/', async (req, res) => {
	try {
		console.log('req.body: ', req.body)
		const a = req.body
		const new_user = new User({ ...a })
		await new_user.save()
		res.status(201).json(
			{
				message: 'Пользователь создан'
			}
		)
	}
	catch (error) {
		res.status(500).json({
			message: 'Витя в роуте ошибка'
		})
		console.log(chalk.red('Витя в роуте ошибка :', error))
	}
})


module.exports = router


// app.post('/users', (req, res) => {
// 	let body = _.pick(req.body, ['email', 'password']);
// 	let user = new User(body);

// 	user.save().then(() => {
// 	 return user.generateAuthToken();
// 	}).then((token) => {
// 	 res.header('x-auth', token).send(user);
// 	}).catch((e) => {
// 	 res.status(400).send(e);
// 	})
//   });


//> Если документ не имеет значения для индексированного поля в уникальном индексе, индекс будет хранить нулевое значение для этого документа. Из-за уникального ограничения MongoDB разрешит только один документ, в котором отсутствует индексированное поле. Если имеется более одного документа без значения для проиндексированного поля или отсутствует индексированное поле, сборка индекса завершится с ошибкой повторяющегося ключа.Вы можете комбинировать уникальное ограничение с разреженным индексом для фильтрации этих нулевых значений из уникального индекса и избежать ошибки.




// "followed": true,
// 	"fullName": "Ben",
// 	"status": "Hi hi-hi",
// 	"location": "rrr",
// 		"photoUrl": "https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5cd05cf77dea6f00b30de644_5cd061bdeb28ac00aea4e0e9/scale_1200"}

//https://avatars.mds.yandex.net/get-zen_doc/111343/pub_5d1e64637fa9f600ad62247e_5d1e663e7b832900ad7f6873/scale_1200
//https://yt3.ggpht.com/a/AATXAJxjTQaW6s4jb6yIpqYzrziERM73mzvkwcQuEedM=s900-c-k-c0x00ffffff-no-rj