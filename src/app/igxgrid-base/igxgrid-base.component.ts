import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-igxgrid-base',
  templateUrl: './igxgrid-base.component.html',
  styleUrls: ['./igxgrid-base.component.css']
})
export class IgxGridBaseComponent implements OnInit {
  public columnDefs = [
    {headerName: 'ID', field: 'ID', width: 60},
    {headerName: 'Category', field: 'Category', width: 120},
    {headerName: 'Type', field: 'Type', width: 100},
    {headerName: 'Spread', field: 'Spread', width: 90},
    {headerName: 'Open Price', field: 'OpenPrice', width: 90},
    {headerName: 'Price', field: 'Price', width: 90},
    {headerName: 'Buy', field: 'Buy', width: 90},
    {headerName: 'Sell', field: 'Sell', width: 90},
    {headerName: 'Change', field: 'Change', width: 90},
    {headerName: 'Change(%)', field: 'ChangePercent'},
    {headerName: 'Volume', field: 'Volume'},
    {headerName: 'High(D)', field: 'HighD'},
    {headerName: 'Low(D)', field: 'LowD'},
    {headerName: 'High(Y)', field: 'HighY'},
    {headerName: 'Low(Y)', field: 'LowY'},
    {headerName: 'Start(Y)', field: 'StartY'},
    {headerName: 'Low(Y)', field: 'LowY'},
    {headerName: 'Spread', field: 'Spread'}
  ];

  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {
  }
}
