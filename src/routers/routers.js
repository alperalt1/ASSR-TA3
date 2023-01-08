const { Router } = require('express');
const router = Router();
const { ini, initStore, querUno, querDos, querTres } = require('../controllers/controllers.js');

router.get('/Inicio',ini);
router.get('/Inicio/Store',initStore);
router.get('/Inicio/Store/QueryUno',querUno);
router.get('/Inicio/Store/QueryDos',querDos);
router.get('/Inicio/Store/QueryTres',querTres);
module.exports = router;