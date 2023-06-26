const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate); //активация по ссылке, ктр будет приходить на почту
router.get('/refresh', userController.refresh); //перезаписывает токен
router.get('/users', userController.getUsers);

module.exports = router;
