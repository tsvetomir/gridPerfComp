import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid-base',
  templateUrl: './ag-grid-base.component.html',
  styleUrls: ['./ag-grid-base.component.scss']
})

export class AgGridBaseComponent implements OnInit {
  columnDefs = [
    {field: 'Col0', width: 60},
    {field: 'Col1', width: 120},
    {field: 'Col2', width: 100},
    {field: 'Col3', width: 90},
    {field: 'Col4', width: 90},
    {field: 'Col5', width: 90},
    {field: 'Col6', width: 90},
    {field: 'Col7', width: 90},
    {field: 'Col8', width: 90},
    {field: 'Col9'},
    {field: 'Col10'},
    {field: 'Col11'},
    {field: 'Col12'},
    {field: 'Col13'},
    {field: 'Col14'},
    {field: 'Col5'}
  ];

  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }


  ngOnInit() {
  }

}



