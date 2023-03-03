const db = require('../models/index')
const User = db.user
const Roles = db.roles

async function checkEmailExists (req, res, next) {
    try {
      const mail = await User.findOne({ email: req.body.email })
      if (mail) {
        return res.status(400).send({ msg: 'Email ya está en uso' })
      }
      next()
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
  
  // check if roles provided exist in database
  async function checkRolesExist (req, res, next) {
    const { user_type } = req.body
    let findrole;
    try {
      console.log(user_type)
      if (user_type) {
        
          findrole = await Roles.findOne({ name: user_type })
          console.log(findrole)
            if (!findrole) {
              return res.status(400).send({ msg: 'role not found' })
            } else {
              req.body.user_type = findrole._id
              next()
            }
        
      } else {
        findrole = await Roles.findOne({ name: 'estudiante' })
        req.body.user_type = findrole._id
        next()
      }
    } catch (error) {
      return res.status(500).send({ error: error.message })
    }
  }

  async function checkUserExists (req, res, next) {
    try {
      const formatEmail = req.body.email.toLowerCase()
      const mail = await User.findOne({ email: formatEmail })
      if (!mail) {
        return res.status(400).send({
          msg: 'Usuario no registrado'
        })
      }
      next()
    } catch (error) {
      return res.status(500).send(error.message)
    }
}

  module.exports = {
    checkEmailExists,
    checkRolesExist,
    checkUserExists
    }