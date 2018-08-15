import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-igxgrid-withfeatures',
  templateUrl: './igxgrid-withFeatures.component.html',
  styleUrls: ['./igxgrid-withFeatures.component.css']
})
export class IgxGridWithFeaturesComponent implements OnInit {
  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {
  }
}
