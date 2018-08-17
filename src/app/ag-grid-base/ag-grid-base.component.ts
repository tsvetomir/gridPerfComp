import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid-base',
  templateUrl: './ag-grid-base.component.html',
  styleUrls: ['./ag-grid-base.component.scss']
})

export class AgGridBaseComponent implements OnInit {
  // setting the first 10 columns with specified column widths to make sure that all grids display an equivalent amount of cells
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
    {field: 'Col9'}
  ];

  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;

    // add the column count as a parameter in this loop here - for now using 100 as that's all the column data we have in the data source
    for (let i = 10; i < 100; i++) {
      const fieldName = 'Col' + i.toString();
      const newField = {field: fieldName, width: 90};
      this.columnDefs.push(newField);
    }
  }


  ngOnInit() {
  }

}



