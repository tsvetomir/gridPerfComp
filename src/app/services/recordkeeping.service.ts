import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecordEntryEntity } from '../entities/record-entry-entity';

@Injectable({
  providedIn: 'root'
})
export class RecordKeepingService {

  public records: Observable<RecordEntryEntity[]>;
  private _records: BehaviorSubject<RecordEntryEntity[]>;
  public _data: RecordEntryEntity[] = [];
  constructor() {
      this._records = new BehaviorSubject([]);
      this.records = this._records.asObservable();
  }

  public getData() {
      this._records.next(this._data);
  }

  public addEntry(viewName, rowCount: number, colCount: number, timeElapsed: number) {
    this._data.push({ TimeStamp: new Date(), ViewName: viewName,
                      RowCount: rowCount, ColumnCount: colCount,
                      TimeElapsed: timeElapsed });

  }
}
