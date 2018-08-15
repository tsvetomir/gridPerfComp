import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendoui-grid-withfeatures',
  templateUrl: './kendoui-grid-withFeatures.component.html',
  styleUrls: ['./kendoui-grid-withFeatures.component.scss']
})
export class KendouiGridWithFeaturesComponent implements OnInit {
  public data = [];
  public skip = 0;
  public pageSize = 100;
  public gridView: GridDataResult;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService._data;
    this.loadProducts();
  }

  ngOnInit() {
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = {
        data: this.data. slice(this.skip, this.skip + this.pageSize),
        total: this.data.length
    };
  }
}
