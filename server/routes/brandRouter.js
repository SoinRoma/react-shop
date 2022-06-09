const Router = require('express');
const router = new Router;
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), brandController.create);
router.get('/', brandController.getAll);
// Сделать для удаления
router.delete('/');

module.exports = router;