import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GerenteService {

    constructor(private http: HttpClient){
        console.log("Servicio ingreso listo para usarse...")
    }
    
    getGerente(){
        return this.http.get('http://localhost:8091/Gerente')
    }
}