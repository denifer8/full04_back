const express = require('express');
const routeVuelos = require('./routes/RouteVuelos.js')

const app = express();

app.use('/api/vuelos', routeVuelos);


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log('API vuelos - Escuchando en el puerto ' + PORT);
    console.log(process.env.URL_DATABASE);
})

