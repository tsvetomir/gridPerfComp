import { Component, OnInit, Output } from '@angular/core';
import { PeopleGenService } from '../services/people-gen.service';
import { PersonEntity } from '../entities/person-entity';
import { Observable } from 'rxjs';
import { WjFlexGrid } from 'wijmo/wijmo.angular2.grid';

@Component({
  selector: 'app-wijmo-grid-base',
  templateUrl: './wijmo-grid-base.component.html',
  styleUrls: ['./wijmo-grid-base.component.scss']
})
export class WijmoGridBaseComponent implements OnInit {
  public data: Observable<PersonEntity[]>;

  constructor(private people: PeopleGenService) {
    this.people.getData();
    this.data = this.people.records;
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
