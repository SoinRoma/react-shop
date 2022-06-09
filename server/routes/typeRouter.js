const Router = require('express');
const router = new Router;
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), typeController.create);
router.get('/', typeController.getAll);
// Сделать для удаления
router.delete('/');

module.exports = router;