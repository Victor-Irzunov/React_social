const { Schema, model, Types } = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');


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
	// timestamps: true 
})

schema.method("toJSON", function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});
schema.plugin(mongoosePaginate)



module.exports = model('User_model', schema)







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