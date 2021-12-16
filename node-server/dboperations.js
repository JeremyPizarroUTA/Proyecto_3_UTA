//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
var Trabajador = require ('./Trabajador');

async function getTrabajador(){
    try{
        let pool = await sql.connect(config);
        let Trabajador = await pool.request().query("select * from Trabajador");
        return Trabajador.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getLoteMateriaPrimas(){
    try{
        let pool = await sql.connect(config);
        let LoteMateriaPrimas = await pool.request().query("select * from LoteMateriaPrimas");
        return LoteMateriaPrimas.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getPuntoVenta(){
    try{
        let pool = await sql.connect(config);
        let PuntoVenta= await pool.request().query("select * from PuntoVenta");
        return PuntoVenta.recordsets;
    }catch(error){
        console.log(error);
    }
}


async function getGerente(){
    try{
        let pool = await sql.connect(config);
        let Gerente = await pool.request().query("select * from Gerente");
        return Gerente.recordsets;
    }catch(error){
        console.log(error);
    }
}
module.exports={
    getTrabajador : getTrabajador,
    getLoteMateriaPrimas : getLoteMateriaPrimas,
    getPuntoVenta : getPuntoVenta,
    getGerente: getGerente   
}
