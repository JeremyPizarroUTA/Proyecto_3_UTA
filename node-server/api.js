var db = require('./dboperations');
var Trabajador= require('./Trabajador');

const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
const { prototype } = require('./Trabajador');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next) => {
    console.log('api de servicios');
    next();
})

async function obtenerTrabajador(request,response){
    var resultado = await dboperations.getTrabajador();
    response.send(resultado);    
 }
app.get('/empleado', obtenerTrabajador)

async function obtenerLoteMateriaPrimas(request,response){
    var resultado = await dboperations.getLoteMateriaPrimas();
    response.send(resultado);    
 }
app.get('/LoteMateriaPrimas', obtenerLoteMateriaPrimas)

async function PuntoVenta(request,response){
    var resultado = await dboperations.getPuntoVenta();
    response.send(resultado);    
 }
app.get('/Puntoventa', PuntoVenta)

async function Gerente(request,response){
    var resultado = await dboperations.getGerente();
    response.send(resultado);    
 }
app.get('/Gerente', Gerente)


var port = process.env.PORT || 8091;
app.listen(port);
console.log(' La API esta corriendo en el puerto: '+port);