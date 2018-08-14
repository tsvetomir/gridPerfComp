import { Component, OnInit } from '@angular/core';
import { PeopleGenService } from '../services/people-gen.service';
import { PersonEntity } from '../entities/person-entity';
import { Observable } from 'rxjs';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendoui-grid-base',
  templateUrl: './kendoui-grid-base.component.html',
  styleUrls: ['./kendoui-grid-base.component.scss']
})
export class KendouiGridBaseComponent implements OnInit {
  public data = [];
  public skip = 0;
  public pageSize = 60;
  public gridView: GridDataResult;

  constructor(private people: PeopleGenService) {
    this.people.getData();
    this.data = this.people._data;
    this.loadProducts();
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
  ngOnInit() {
    const start = new Date();
    setTimeout( function () {
      // Logs when Angular is done processing databinding
      this.renderingTime = new Date().valueOf() - start.valueOf();
      console.log('Rendering time: ' + this.renderingTime + ' ms');
      });

  }

}
