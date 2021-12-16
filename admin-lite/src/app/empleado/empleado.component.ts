import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  Trabajador: any [] =[];
  
  constructor(private _EmpleadoService:EmpleadoService) {

    
    this._EmpleadoService.getTrabajador().subscribe( (data:any) => {
      this.Trabajador = data;
      console.log(data);
    })  

   }

  ngOnInit(): void {
  }

}
