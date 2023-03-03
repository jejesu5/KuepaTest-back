const db = require('../models/index')
const Role = db.roles

async function createRoles () {
  try {
    const roles = await Role.estimatedDocumentCount()
    if (roles > 0) {
      return
    }
    const values = await Promise.all([
      new Role({ name: 'estudiante' }).save(),
      new Role({ name: 'moderador' }).save()
    ])
    console.log(values)
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = createRoles