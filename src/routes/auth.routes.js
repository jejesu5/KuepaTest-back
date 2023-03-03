const authController = require('../controllers/User/auth.controller')
const validations = require('../middlewares/validations.middleware')
const router = require('express').Router()

// sign up an user
router.post('/signup', [validations.checkEmailExists,
  validations.checkRolesExist], authController.signUp)

// sign in an user
router.post('/signin', validations.checkUserExists, authController.signIn)


module.exports = router