const config = require("./dbconfig")

class PuntoVenta{
    constructor(idPuntoVenta,Nombre,Telefeno,areadetrabajo){
        this.idPuntoVenta = idPuntoVenta;
        this.Nombre = Nombre;
        this.Telefono = Telefeno;
        this.areadetrabajo = areadetrabajo;
    }
}

module.exports = PuntoVenta;