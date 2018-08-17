import { Component, OnInit, ViewChild } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';
import { FlexGrid } from 'wijmo/wijmo.grid';
import { WjFlexGrid } from 'wijmo/wijmo.angular2.grid';


@Component({
  selector: 'app-wijmo-grid-base',
  templateUrl: './wijmo-grid-base.component.html',
  styleUrls: ['./wijmo-grid-base.component.scss']
})
export class WijmoGridBaseComponent implements OnInit {
  public data: Observable<any[]>;
  @ViewChild('grid') public grid: FlexGrid;
  @ViewChild('grid') public grid2: WjFlexGrid;
  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {

  }

}
