const express = require('express');
const flights = require('../data/vuelos.json')

const ejecutarBusq = (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(flights);
}

module.exports = ejecutarBusq;