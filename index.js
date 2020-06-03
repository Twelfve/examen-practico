//Importamos librerias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Definimos el puerto
const PUERTO = process.env.PORT || 3000;
//Rutas
let pintoresRouter = require('./routes/pintor');
//Sitio estatico y hbs
const app = express();
//Establezco hbs como mi view
app.set('view engine', 'hbs');
//Establecemos los partials
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
//Vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);
//Conexion a mongodb
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Twelfve:gigabyteb250@chavezvictor-ug0y1.mongodb.net/Catalogo_Verochi?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexion establecida =D');
    })
    .catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto 3000')
});