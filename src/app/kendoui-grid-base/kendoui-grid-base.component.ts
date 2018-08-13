import { Component, OnInit } from '@angular/core';
import { PeopleGenService } from '../services/people-gen.service';
import { PersonEntity } from '../entities/person-entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kendoui-grid-base',
  templateUrl: './kendoui-grid-base.component.html',
  styleUrls: ['./kendoui-grid-base.component.scss']
})
export class KendouiGridBaseComponent implements OnInit {
  public data: Observable<PersonEntity[]>;

  constructor(private people: PeopleGenService) {
    this.people.getData();
    this.data = this.people.records;
  }


  ngOnInit() {
  }

}
