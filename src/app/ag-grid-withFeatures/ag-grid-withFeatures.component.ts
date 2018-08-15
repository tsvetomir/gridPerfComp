import { Component, OnInit } from '@angular/core';
import { PeopleGenService } from '../services/people-gen.service';
import { DataGenService } from '../services/data-gen.service';
import { PersonEntity } from '../entities/person-entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid-withFeatures',
  templateUrl: './ag-grid-withFeatures.component.html',
  styleUrls: ['./ag-grid-withFeatures.component.scss']
})

export class AgGridWithFeaturesComponent implements OnInit {
  columnDefs = [
    {headerName: 'ID', field: 'ID' },
    {headerName: 'Category', field: 'Category' },
    {headerName: 'Type', field: 'Type'},
    {headerName: 'Spread', field: 'Spread'},
    {headerName: 'Open Price', field: 'OpenPrice'},
    {headerName: 'Price', field: 'Price'},
    {headerName: 'Buy', field: 'Buy'},
    {headerName: 'Sell', field: 'Sell'},
    {headerName: 'Change', field: 'Change'},
    {headerName: 'Change(%)', field: 'ChangePercent'},
    {headerName: 'Volume', field: 'Volume'},
    {headerName: 'High(D)', field: 'HighD'},
    {headerName: 'Low(D)', field: 'LowD'},
    {headerName: 'High(Y)', field: 'HighY'},
    {headerName: 'Low(Y)', field: 'LowY'},
    {headerName: 'Start(Y)', field: 'StartY'},
    {headerName: 'Low(Y)', field: 'LowY'},
    {headerName: 'Spread', field: 'Spread'},
    {headerName: 'A', field: 'A'},
    {headerName: 'B', field: 'B'},
    {headerName: 'C', field: 'C'},
    {headerName: 'D', field: 'D'},
    {headerName: 'E', field: 'E'},
    {headerName: 'F', field: 'F'},
    {headerName: 'G', field: 'G'},
    {headerName: 'H', field: 'H'},
    {headerName: 'I', field: 'I'},
    {headerName: 'J', field: 'J'},
    {headerName: 'K', field: 'K'},
    {headerName: 'L', field: 'L'},
    {headerName: 'M', field: 'M'},
    {headerName: 'N', field: 'N'},
    {headerName: 'O', field: 'O'},
    {headerName: 'P', field: 'P'},
    {headerName: 'Q', field: 'Q'},
    {headerName: 'R', field: 'R'},
    {headerName: 'S', field: 'S'},
    {headerName: 'T', field: 'T'},
    {headerName: 'U', field: 'U'},
    {headerName: 'V', field: 'V'},
    {headerName: 'W', field: 'W'},
    {headerName: 'X', field: 'X'},
    {headerName: 'Y', field: 'Y'},
    {headerName: 'Z', field: 'Z'},
    {headerName: 'AA', field: 'AA'},
    {headerName: 'AB', field: 'AB'},
    {headerName: 'AC', field: 'AC'},
    {headerName: 'AD', field: 'AD'},
    {headerName: 'AE', field: 'AE'},
    {headerName: 'AF', field: 'AF'},
    {headerName: 'AG', field: 'AG'},
    {headerName: 'AH', field: 'AH'},
    {headerName: 'AI', field: 'AI'},
    {headerName: 'AJ', field: 'AJ'},
    {headerName: 'AK', field: 'AK'},
    {headerName: 'AL', field: 'AL'},
    {headerName: 'AM', field: 'AM'},
    {headerName: 'AN', field: 'AN'},
    {headerName: 'AO', field: 'AO'},
    {headerName: 'AP', field: 'AP'},
    {headerName: 'AQ', field: 'AQ'},
    {headerName: 'AR', field: 'AR'},
    {headerName: 'AS', field: 'AS'},
    {headerName: 'AT', field: 'AT'},
    {headerName: 'AU', field: 'AU'},
    {headerName: 'AV', field: 'AV'},
    {headerName: 'AW', field: 'AW'},
    {headerName: 'AX', field: 'AX'},
    {headerName: 'AY', field: 'AY'},
    {headerName: 'AZ', field: 'AZ'},
    {headerName: 'BA', field: 'BA'},
    {headerName: 'BB', field: 'BB'},
    {headerName: 'BC', field: 'BC'},
    {headerName: 'BD', field: 'BD'},
    {headerName: 'BE', field: 'BE'},
    {headerName: 'BF', field: 'BF'},
    {headerName: 'BG', field: 'BG'},
    {headerName: 'BH', field: 'BH'},
    {headerName: 'BI', field: 'BI'},
    {headerName: 'BJ', field: 'BJ'},
    {headerName: 'BK', field: 'BK'},
    {headerName: 'BL', field: 'BL'},
    {headerName: 'BM', field: 'BM'},
    {headerName: 'BN', field: 'BN'},
    {headerName: 'BO', field: 'BO'},
    {headerName: 'BP', field: 'BP'},
    {headerName: 'BQ', field: 'BQ'},
    {headerName: 'BR', field: 'BR'},
    {headerName: 'BS', field: 'BS'},
    {headerName: 'BT', field: 'BT'},
    {headerName: 'BU', field: 'BU'},
    {headerName: 'BV', field: 'BV'},
    {headerName: 'BW', field: 'BW'},
    {headerName: 'BX', field: 'BX'},
    {headerName: 'BY', field: 'BY'},
    {headerName: 'BZ', field: 'BZ'},
    {headerName: 'CA', field: 'CA'},
    {headerName: 'CB', field: 'CB'}
  ];

  public data: Observable<PersonEntity[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }


  ngOnInit() {
    const start = new Date();
    setTimeout( function () {
      // Logs when Angular is done processing databinding
      this.renderingTime = new Date().valueOf() - start.valueOf();
      console.log('Ag-grid,' + this.renderingTime);
      });

  }

}



