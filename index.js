const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const cookieParser = require('cookie-parser')
const app = express()

const PORT = config.get('port') || 5000

app.use(express.json({ extended: true }))          //1:33:40  //req.body - был undefinet
app.use(cookieParser())

app.use('/api/users', require('./routes/users.routes'))
app.use('/api/profiles', require('./routes/profile.routes'))
app.use('/api/auth', require('./routes/auth.routes'))



// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

async function f_start() {
	try {
		await mongoose.connect(config.get('mongoUri'),
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				// useFindAndModify: false
			})
		app.listen(PORT, () => console.log(chalk.cyan(`::::::::::::::::::::....Server start (порт: ${PORT})....::::::::::::::::::::`)))
	}
	catch (e) {
		console.log(chalk.red('Oшибка в index.js (f_start): ', e.message))
		process.exit(1)
	}
}
f_start()



// "mongoUri": "mongodb+srv://Victor_React_Node:qaz123321@cluster0.65quu.mongodb.net/fb?retryWrites=true&w=majority",