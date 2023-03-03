const services = require('../../services/User/auth.services')


/**
 * this function create a new user in the database
 * @param {*} req name, lastName, email, password, username, user_type
 * @param {*} res user created
 * @returns 
 */
exports.signUp = async (req, res) => {
  try {
    const { name, lastName, email, password, username, user_type } = req.body
    const user = await services.signUp(name, lastName, email, password, username, user_type)
    return res.status(200).json({
      message: 'Usuario creado exitosamente',
      user
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

/**
 * this controller is for the login of the user, it assigns a token to the user
 * @param {*} req email, password
 * @param {*} res user info and token
 * @returns 
 */
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await services.signIn(email, password)
    if (!user) {
      return res.status(401).json({
        msg: 'Contraseña incorrecta'
      })
    }
    return res.status(200).json({
      message: 'Inicio de sesión exitoso',
      user
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}