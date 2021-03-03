const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	followed:
	{
		type: Boolean,
		required: true
	},
	fullName:
	{
		type: String,
		required: true
	},
	status:
	{
		type: String,
		required: true
	},
	email:
	{
		type: String,
		unique: true,
		required: true
	},
	location:
	{
		type: String
	},
	photoUrl:
	{
		type: String,
		required: true
	},
})


//const validator = require('validator');
// email: {
// 	type: String,
// 	required: true,
// 	trim: true,
// 	minlength: 1,
// 	unique: true, - уникальными значениями
//    sparse:true, - разрешить нулевые значения
// 	validate: {
// 	 validator: validator.isEmail,
// 	 message: '{VALUE} is not a valid email'
// 	}
//   },
//   password: {
// 	type: String,
// 	require: true,
// 	minlength: 6
//   },

module.exports = model('User_model', schema)