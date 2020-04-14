const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  team: String,
  hometown: String,
  sponsors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sponsor"}], 
  sports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sport"}],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
  achievements: Array,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
