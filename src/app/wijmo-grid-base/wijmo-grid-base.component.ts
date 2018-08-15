import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-wijmo-grid-base',
  templateUrl: './wijmo-grid-base.component.html',
  styleUrls: ['./wijmo-grid-base.component.scss']
})
export class WijmoGridBaseComponent implements OnInit {
  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {
  }

}
