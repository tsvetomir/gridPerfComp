import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordKeepingService } from '../services/recordkeeping.service';
import { RecordEntryEntity } from '../entities/record-entry-entity';
import { IgxGridComponent, IgxColumnComponent, IgxExcelExporterService, IgxExcelExporterOptions } from 'igniteui-angular';

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
  }

  public exportButtonHandler() {
    this.excelExportService.export(this.resultsGrid, new IgxExcelExporterOptions('ExportedDataFile'));
  }

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'TimeStamp') {
      column.formatter = (date => date.toLocaleTimeString());
    }

  }
}
