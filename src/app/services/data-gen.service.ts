import { Injectable } from '@angular/core';
import { DATA } from '../Assets/financialData';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGenService {

  public records: Observable<any[]>;
  private _records: BehaviorSubject<any[]>;
  public _data;

  constructor() {
      this._records = new BehaviorSubject([]);
      this.records = this._records.asObservable();
  }

  public getData(count: number) {
      this._data = this.generateData(count);
      
      this._records.next(this._data);
      console.log('Generated records:' + this._data.length);
  }

  private generateData(count: number): any[] {
      const currData = [];
      for (let i = 0; i < count; i++) {
          const dataObj = Object.assign({}, DATA[0]);
          this.randomizeObjectData(dataObj);
          //col0 stores the item ID, others are random
          dataObj.Col0 = i;
          currData.push(dataObj);
      }
      return currData;
  }
  private randomizeObjectData(dataObj) {
      dataObj.Col1 = Math.random() > 0.5 ? "USD" : "EUR";
      dataObj.Col2 = Math.random().toFixed(2);
      dataObj.Col3 = Math.random() > 0.5 ? "Watford" : "Burgas";
      dataObj.Col3 = Math.random().toFixed(2);
      dataObj.Col4 = Math.random() > 0.5 ? "Buy" : "Sell";
      dataObj.Col5 = Math.random().toFixed(2);
      dataObj.Col6 = Math.random() > 0.5 ? "Flat" : "Variable";
      dataObj.Col7 = Math.random().toFixed(2);
      dataObj.Col8 = Math.random() > 0.5 ? "New" : "Existing";
      dataObj.Col9 = Math.random().toFixed(2);
      dataObj.Col10 = Math.random().toFixed(2);
      dataObj.Col11 = Math.random().toFixed(2);
      dataObj.Col12 = Math.random().toFixed(2);
      dataObj.Col13 = Math.random().toFixed(2);
      dataObj.Col14 = Math.random().toFixed(2);
      dataObj.Col15 = Math.random().toFixed(2);
      dataObj.Col16 = Math.random().toFixed(2);
      dataObj.Col17 = Math.random().toFixed(2);
      dataObj.Col18 = Math.random().toFixed(2);
      dataObj.Col19 = Math.random().toFixed(2);
      dataObj.Col20 = Math.random().toFixed(2);
      dataObj.Col21 = Math.random().toFixed(2);
      dataObj.Col22 = Math.random().toFixed(2);
      dataObj.Col23 = Math.random().toFixed(2);
      dataObj.Col24 = Math.random().toFixed(2);
      dataObj.Col25 = Math.random().toFixed(2);
      dataObj.Col26 = Math.random().toFixed(2);
      dataObj.Col27 = Math.random().toFixed(2);
      dataObj.Col28 = Math.random().toFixed(2);
      dataObj.Col29 = Math.random().toFixed(2);
      dataObj.Col30 = Math.random().toFixed(2);
      dataObj.Col31 = Math.random().toFixed(2);
      dataObj.Col32 = Math.random().toFixed(2);
      dataObj.Col33 = Math.random().toFixed(2);
      dataObj.Col34 = Math.random().toFixed(2);
      dataObj.Col35 = Math.random().toFixed(2);
      dataObj.Col36 = Math.random().toFixed(2);
      dataObj.Col37 = Math.random().toFixed(2);
      dataObj.Col38 = Math.random().toFixed(2);
      dataObj.Col39 = Math.random().toFixed(2);
      dataObj.Col40 = Math.random().toFixed(2);
      dataObj.Col41 = Math.random().toFixed(2);
      dataObj.Col42 = Math.random().toFixed(2);
      dataObj.Col43 = Math.random().toFixed(2);
      dataObj.Col44 = Math.random().toFixed(2);
      dataObj.Col45 = Math.random().toFixed(2);
      dataObj.Col46 = Math.random().toFixed(2);
      dataObj.Col47 = Math.random().toFixed(2);
      dataObj.Col48 = Math.random().toFixed(2);
      dataObj.Col49 = Math.random().toFixed(2);
      dataObj.Col50 = Math.random().toFixed(2);
      dataObj.Col51 = Math.random().toFixed(2);
      dataObj.Col52 = Math.random().toFixed(2);
      dataObj.Col53 = Math.random().toFixed(2);
      dataObj.Col54 = Math.random().toFixed(2);
      dataObj.Col55 = Math.random().toFixed(2);
      dataObj.Col56 = Math.random().toFixed(2);
      dataObj.Col57 = Math.random().toFixed(2);
      dataObj.Col58 = Math.random().toFixed(2);
      dataObj.Col59 = Math.random().toFixed(2);
      dataObj.Col60 = Math.random().toFixed(2);
      dataObj.Col61 = Math.random().toFixed(2);
      dataObj.Col62 = Math.random().toFixed(2);
      dataObj.Col63 = Math.random().toFixed(2);
      dataObj.Col64 = Math.random().toFixed(2);
      dataObj.Col65 = Math.random().toFixed(2);
      dataObj.Col66 = Math.random().toFixed(2);
      dataObj.Col67 = Math.random().toFixed(2);
      dataObj.Col68 = Math.random().toFixed(2);
      dataObj.Col69 = Math.random().toFixed(2);
      dataObj.Col70 = Math.random().toFixed(2);
      dataObj.Col71 = Math.random().toFixed(2);
      dataObj.Col72 = Math.random().toFixed(2);
      dataObj.Col73 = Math.random().toFixed(2);
      dataObj.Col74 = Math.random().toFixed(2);
      dataObj.Col75 = Math.random().toFixed(2);
      dataObj.Col76 = Math.random().toFixed(2);
      dataObj.Col77 = Math.random().toFixed(2);
      dataObj.Col78 = Math.random().toFixed(2);
      dataObj.Col79 = Math.random().toFixed(2);
      dataObj.Col80 = Math.random().toFixed(2);
      dataObj.Col81 = Math.random().toFixed(2);
      dataObj.Col82 = Math.random().toFixed(2);
      dataObj.Col83 = Math.random().toFixed(2);
      dataObj.Col84 = Math.random().toFixed(2);
      dataObj.Col85 = Math.random().toFixed(2);
      dataObj.Col86 = Math.random().toFixed(2);
      dataObj.Col87 = Math.random().toFixed(2);
      dataObj.Col88 = Math.random().toFixed(2);
      dataObj.Col89 = Math.random().toFixed(2);
      dataObj.Col90 = Math.random().toFixed(2);
      dataObj.Col91 = Math.random().toFixed(2);
      dataObj.Col92 = Math.random().toFixed(2);
      dataObj.Col93 = Math.random().toFixed(2);
      dataObj.Col94 = Math.random().toFixed(2);
      dataObj.Col95 = Math.random().toFixed(2);
      dataObj.Col96 = Math.random().toFixed(2);
      dataObj.Col97 = Math.random().toFixed(2);
      dataObj.Col98 = Math.random().toFixed(2);
      dataObj.Col99 = Math.random().toFixed(2);
  }
  private generateNewPrice(oldPrice): any {
      const rnd = parseFloat(Math.random().toFixed(2));
      const volatility = 2;
      let newPrice = 0;

      let changePercent = 2 * volatility * rnd;
      if (changePercent > volatility) {
          changePercent -= (2 * volatility);
      }

      const changeAmount = oldPrice * (changePercent / 100);
      newPrice = oldPrice + changeAmount;

      const result = {Price: 0, ChangePercent: 0};
      result.Price = parseFloat(newPrice.toFixed(2));
      result.ChangePercent = parseFloat(changePercent.toFixed(2));

      return result;
  }
}
