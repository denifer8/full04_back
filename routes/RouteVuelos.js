const express = require('express');
// const flights = require("../data/reservas.json")

const ejecutarBusq = require('../controllers/buscarListado')

const router = express.Router();

router.get('/', ejecutarBusq)



module.exports = router;