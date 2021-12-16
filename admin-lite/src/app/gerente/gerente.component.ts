import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../servicios/gerente.service';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent implements OnInit {

  Gerente: any [] = [];
  
  constructor(private _GerenteService:GerenteService) {

    this._GerenteService.getGerente().subscribe( (data:any) => {
      this.Gerente = data;
      console.log(data);
    })



   }

  ngOnInit(): void {
  }

}
