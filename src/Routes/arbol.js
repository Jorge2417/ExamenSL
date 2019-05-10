const router = require('express').Router();

const arbolController = require('../Controlador/arbolControler');

router.get('/', arbolController.list);
router.get('/registrar', arbolController.registrar);
router.post('/add', arbolController.save);
// router.get('/update/:id', arbolController.edit);
// router.post('/update/:id', arbolController.update);
// router.get('/delete/:id', arbolController.delete);

module.exports = router;