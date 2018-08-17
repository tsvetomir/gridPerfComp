import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { IgxGridComponent, IgxColumnComponent } from 'igniteui-angular';
import { PeopleGenService } from '../services/people-gen.service';

@Component({
  selector: 'app-igxgrid-base',
  templateUrl: './igxgrid-base.component.html',
  styleUrls: ['./igxgrid-base.component.css']
})
export class IgxGridBaseComponent implements OnInit {
  public data: Observable<any[]>;
  @ViewChild('grid') public grid: IgxGridComponent;

  constructor(private finDataService: PeopleGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {
  }
}
