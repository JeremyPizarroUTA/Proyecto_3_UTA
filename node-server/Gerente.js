const config = require("./dbconfig")

class Gerente{
    constructor(idgerente,nombre,apellido,areatrabajo){
        this.idgerente = idgerente
        this.nombre = nombre;
        this.apellido = apellido;
        this.areatrabajo = areatrabajo;
    }
}

module.exports = Gerente;