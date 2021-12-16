const config = require("./dbconfig")

class Trabajador{
    constructor(idempleado,nombre,apellido,contraseña,areatrabajo,email){
        this.idempleado = idempleado
        this.nombre = nombre;
        this.apellido = apellido;
        this.contraseña = contraseña;
        this.areatrabajo = areatrabajo;
        this.email = email;
    }
}

module.exports = Trabajador;