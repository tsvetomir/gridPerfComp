import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordKeepingService } from '../services/recordkeeping.service';
import { RecordEntryEntity } from '../entities/record-entry-entity';
import { IgxGridComponent, IgxColumnComponent, IgxExcelExporterService,
         IgxExcelExporterOptions, GroupedRecords, SortingDirection, ISortingExpression } from 'igniteui-angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public data: Observable<RecordEntryEntity[]>;
  @ViewChild('resultsGrid') public resultsGrid: IgxGridComponent;

  constructor(private entries: RecordKeepingService, private excelExportService: IgxExcelExporterService) {
    this.entries.getData();
    this.data = this.entries.records;
  }

  ngOnInit() {
    this.resultsGrid.groupingExpressions = [ { fieldName: 'ViewName', dir: SortingDirection.Desc } ];
  }

  public exportButtonHandler() {
    this.excelExportService.export(this.resultsGrid, new IgxExcelExporterOptions('ExportedDataFile'));
  }

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'TimeStamp') {
      column.formatter = (date => date.toLocaleTimeString());
    }
  }

  public GetAverage(records: GroupedRecords) {
    let ttl = 0;
    let record;

    for (let i = 0; i < records.length; i++) {
      record = records[i];
      ttl += Number(record.TimeElapsed);
    }
    return (ttl / records.length).toFixed(2);
  }
}
