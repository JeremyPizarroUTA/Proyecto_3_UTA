import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    private ventas:Venta[]=[
    {
      nombre: "Elite admin",
      estado: "SALE",
      fecha: "April 18, 2021",
      precio: 18

    },
    {
        
        nombre: "Real Homes WP Theme",
        estado: "EXTENDED",
        fecha: "April 19, 2021",
        precio: 1250
  
    },
    {
        nombre: "Ample Admin",
        estado: "EXTEND",
        fecha: "April 19, 2021",
        precio: 1250
  
    },
    {
        nombre: "Medical Pro WP Theme",
        estado: "TAX",
        fecha: "April 20, 2021",
        precio: -24
  
    },
    {
        nombre: "Hosting press html",
        estado: "SALE",
        fecha: "April 21, 2021",
        precio: 24
  
    },
    {
        nombre: "Digital Agency PSD",
        estado: "SALE",
        fecha: "April 23, 2021",
        precio: -14
  
    },
    {
        nombre: "Helping Hands WP Theme",
        estado: "MEMBER",
        fecha: "April 22, 2021",
        precio: 64
  
    },
    ]

    private comentario:Coment[]=[
    {
        nombre: "James Anderson",
        texto: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
        estado: "Pending",
        fecha: "April 14, 2021"
    },
    {
        nombre: "Michael Jorden",
        texto: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
        estado: "Approved",
        fecha: "April 14, 2021"
    },
    {
        nombre: "Johnathan Doeting",
        texto: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
        estado: "Rejected",
        fecha: "April 14, 2021"
    },

    ]

    private estado:Status[]=[

    {
       nombre:"Varun Dhavan",
       estado: "online"
    },
    {
        nombre:"Genelia Deshmukh",
        estado: "Away"
     },
     {
        nombre:"Ritesh Deshmukh",
        estado: "Busy"
     },
     {
        nombre:"Arijit Sinh",
        estado: "Offline"
     },
     {
        nombre:"Govinda Star",
        estado: "online"
     },
     {
        nombre:"John Abraham",
        estado: "online"
     },
    ]



    constructor(private http: HttpClient){
        console.log("Servicio Dashboard listo para usarse...")
    }

    getVentas():Venta[]{
        return this.ventas;
    }
    getComent():Coment[]{
        return this.comentario;
    }
    getStatus():Status[]{
        return this.estado;
    }
    getLotemateriaPrima(){
        return this.http.get('http://localhost:8091/LoteMateriaPrimas')
    }

    getGerente(){
        return this.http.get('http://localhost:8091/Gerente')
    }
    getTrabajador(){
        return this.http.get('http://localhost:8091/empleado')
    }
}

export interface Venta{

    nombre: string;
    estado: string;
    fecha: string;
    precio: number;    
}

export interface Coment{

    nombre: string;
    texto: string;
    estado: string;
    fecha: string;  
}

export interface Status{

    nombre: string;
    estado: string;  
}