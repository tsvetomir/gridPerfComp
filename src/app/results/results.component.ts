import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordKeepingService } from '../services/recordkeeping.service';
import { RecordEntryEntity } from '../entities/record-entry-entity';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public data: Observable<RecordEntryEntity[]>;

  constructor(private entries: RecordKeepingService) {
    this.entries.getData();
    this.data = this.entries.records;
  }

  ngOnInit() {
  }
}
