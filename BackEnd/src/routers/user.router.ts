// TODO: Importálás
const userController = require('../controllers/user.controller');

/**
 * USER modul útvonalai
 */

// register new user
router.post('/register', userController.register);

// login user
router.post('/login', userController.login);

router.get('/', (req, res) => {res.send("hello")});

module.exports = router;