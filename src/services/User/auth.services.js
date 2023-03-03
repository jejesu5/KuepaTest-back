const db = require('../../models/index')
const User = db.user
const Roles = db.roles
const JWT = require('jsonwebtoken')
const encription = require('../../libs/encription')
require('dotenv').config()

exports.signUp = async (name, lastName, email, password, username, user_type) => {
  try {
    const hashedPassword = await encription.encrypt(password)
    const newUser = new User({
      name,
      lastName,
      email,
      username,
      password: hashedPassword,
      user_type,
    })
   
    await newUser.save()

    return newUser

  } catch (error) {
    throw new Error(error)
  }
}

exports.signIn = async (email, password) => {
    try {
      const user = await User.findOne({ email }).populate('user_type')
      const validation = await encription.compareEncrypt(password, user.password)
  
      if (!validation) {
        return false
      }
  
      const token = JWT.sign({ id: user._id }, process.env.SECRET, { expiresIn: 86400 })
  
      return {
        accessToken: token,
        id: user._id,
        email: user.email,
        username: user.username,
        name: `${user.name} ${user.lastName}`,
        roles: user.user_type.name,
      }
    } catch (error) {
      throw new Error(error)
    }
  }