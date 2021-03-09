const { Schema, model, Types } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');


const schema = new Schema({
	email:
	{
		type: String,
		unique: true,     //уникальный
		required: true
	},
	password:
	{
		type: String,
		required: true
	},
	cookies:
	{
		type: { foo: String }
	}
})

schema.method("toJSON", function () {
	const { __v, _id, ...object } = this.toObject()
	object.id = _id
	return object
})
schema.plugin(mongoosePaginate)

module.exports = model('User_login', schema)