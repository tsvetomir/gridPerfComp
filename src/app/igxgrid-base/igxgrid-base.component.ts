import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-igxgrid-base',
  templateUrl: './igxgrid-base.component.html',
  styleUrls: ['./igxgrid-base.component.css']
})
export class IgxGridBaseComponent implements OnInit {
  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {
  }
}
