import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-wijmo-grid-withfeatures',
  templateUrl: './wijmo-grid-withFeatures.component.html',
  styleUrls: ['./wijmo-grid-withFeatures.component.scss']
})
export class WijmoGridWithFeaturesComponent implements OnInit {
  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {
  }

}
