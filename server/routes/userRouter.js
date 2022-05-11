const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleWhere = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleWhere, userController.check)

module.exports = router