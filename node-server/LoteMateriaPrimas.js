const config = require("./dbconfig")

class LoteMateriaPrimas{
    constructor(idLoteMateriaPrima, IndiceCalidadPesunor, Estado, FechaIngreso, IdLoteProveedor){
        this.idLoteMateriaPrima = idLoteMateriaPrima  
        this.IndiceCalidadPesunor = IndiceCalidadPesunor 
        this.Estado = Estado
        this.FechaIngreso = FechaIngreso
        this.IdLoteProveedor = IdLoteProveedor       
    }
}

module.exports = LoteMateriaPrimas;