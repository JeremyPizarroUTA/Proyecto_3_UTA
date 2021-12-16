import { Component, OnInit } from '@angular/core';
import { BasicTableService, Table } from '../servicios/basic-table.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {

  tabla:Table[]=[];
  Puntoventa: any[] = []


  constructor(private _basicTable: BasicTableService) { 
    console.log(_basicTable.getTable());
    this.tabla =_basicTable.getTable();
    console.log(this.tabla[0])

    this._basicTable.getPuntoVenta().subscribe( (data:any) => {
      this.Puntoventa = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
