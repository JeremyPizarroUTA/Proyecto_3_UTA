import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BasicTableService {

    private tabla:Table[]=[

    {
        nombre1:"Deshmukh",
        nombre2:"Prohaska",
        user:"@Genelia",
        rol:"admin"
    },
    {
        nombre1:"Deshmukh",
        nombre2:"GayLord",
        user:"@Ritesh",
        rol:"member"
    },
    {
        nombre1:"Sanghani",
        nombre2:"Gusikowski",
        user:"@Govinda",
        rol:"developer"
    },
    {
        nombre1:"Roshan",
        nombre2:"Rogahn",
        user:"@Hritik",
        rol:"supporter"
    },
    {
        nombre1:"Joshi",
        nombre2:"Hickle",
        user:"@Maruti",
        rol:"member"
    },
    {
        nombre1:"Nigam",
        nombre2:"Eichmann",
        user:"@Sonu",
        rol:"supporter"
    },

    ]
    constructor(private http: HttpClient){
        console.log("Servicio Dashboard listo para usarse...")
    }

    getTable():Table[]{
        return this.tabla;
    }
    getPuntoVenta(){
        return this.http.get('http://localhost:8091/Puntoventa')
    }
}

export interface Table{

    nombre1:string;
    nombre2:string;
    user:string;
    rol:string;
}