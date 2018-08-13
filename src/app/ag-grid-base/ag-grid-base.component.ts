import { Component, OnInit } from '@angular/core';
import { PeopleGenService } from '../services/people-gen.service';
import { PersonEntity } from '../entities/person-entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid-base',
  templateUrl: './ag-grid-base.component.html',
  styleUrls: ['./ag-grid-base.component.scss']
})

export class AgGridBaseComponent implements OnInit {
  columnDefs = [
    { field: 'Id' },
    { field: 'Name' },
    { field: 'Age' },
    { field: 'BirthDay' },
    { field: 'Street' },
    { field: 'City' },
    { field: 'Phone' },
    { field: 'Country' },
    { field: 'Language' },
    { field: 'Sports' },
    { field: 'IsActive' }
  ];

  public data: Observable<PersonEntity[]>;

  constructor(private people: PeopleGenService) {
    this.people.getData();
    this.data = this.people.records;
  }


  ngOnInit() {
  }

}



