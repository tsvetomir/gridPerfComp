import { Injectable } from '@angular/core';
import { DATA } from '../Assets/financialData';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGenService {

  public records: Observable<any[]>;
  private _records: BehaviorSubject<any[]>;
  private currentDate;
  public _data;
  constructor() {
      this._records = new BehaviorSubject([]);
      this.records = this._records.asObservable();
  }

  public getData(count?: number) {
      this._data = DATA;
      if (count) {
          this._data = this.generateData(count);
      }
      else
      {
        this._data = this.generateData(DATA.length);
      }
      this._records.next(this._data);
      console.log("Generated records:" + this._data.length);
  }

  private generateData(count: number): any[] {
      const currData = [];
      this.currentDate = new Date();
      for (let i = 0; i < count; i++) {
          const rand = Math.floor(Math.random() * Math.floor(DATA.length));
          const dataObj = Object.assign({}, DATA[rand]);
          this.randomizeObjectData(dataObj);
          dataObj.ID = i;
          currData.push(dataObj);
      }
      return currData;
  }
  private randomizeObjectData(dataObj) {
      const changeP = 'Change(%)';
      const res = this.generateNewPrice(dataObj.Price);
      dataObj.Change = res.Price - dataObj.Price;
      dataObj.Price = res.Price;
      dataObj[changeP] = res.ChangePercent;
      dataObj.A = Math.random().toFixed(2);
      dataObj.B = Math.random().toFixed(2);
      dataObj.C = Math.random().toFixed(2);
      dataObj.D = Math.random().toFixed(2);
      dataObj.E = Math.random().toFixed(2);
      dataObj.F = Math.random().toFixed(2);
      dataObj.G = Math.random().toFixed(2);
      dataObj.H = Math.random().toFixed(2);
      dataObj.I = Math.random().toFixed(2);
      dataObj.J = Math.random().toFixed(2);
      dataObj.K = Math.random().toFixed(2);
      dataObj.L = Math.random().toFixed(2);
      dataObj.M = Math.random().toFixed(2);
      dataObj.N = Math.random().toFixed(2);
      dataObj.O = Math.random().toFixed(2);
      dataObj.P = Math.random().toFixed(2);
      dataObj.Q = Math.random().toFixed(2);
      dataObj.R = Math.random().toFixed(2);
      dataObj.S = Math.random().toFixed(2);
      dataObj.T = Math.random().toFixed(2);
      dataObj.U = Math.random().toFixed(2);
      dataObj.V = Math.random().toFixed(2);
      dataObj.W = Math.random().toFixed(2);
      dataObj.X = Math.random().toFixed(2);
      dataObj.Y = Math.random().toFixed(2);
      dataObj.Z = Math.random().toFixed(2);
      dataObj.AA = Math.random().toFixed(2);
      dataObj.AB = Math.random().toFixed(2);
      dataObj.AC = Math.random().toFixed(2);
      dataObj.AD = Math.random().toFixed(2);
      dataObj.AE = Math.random().toFixed(2);
      dataObj.AF = Math.random().toFixed(2);
      dataObj.AG = Math.random().toFixed(2);
      dataObj.AH = Math.random().toFixed(2);
      dataObj.AI = Math.random().toFixed(2);
      dataObj.AJ = Math.random().toFixed(2);
      dataObj.AK = Math.random().toFixed(2);
      dataObj.AL = Math.random().toFixed(2);
      dataObj.AM = Math.random().toFixed(2);
      dataObj.AN = Math.random().toFixed(2);
      dataObj.AO = Math.random().toFixed(2);
      dataObj.AP = Math.random().toFixed(2);
      dataObj.AQ = Math.random().toFixed(2);
      dataObj.AR = Math.random().toFixed(2);
      dataObj.AS = Math.random().toFixed(2);
      dataObj.AT = Math.random().toFixed(2);
      dataObj.AU = Math.random().toFixed(2);
      dataObj.AV = Math.random().toFixed(2);
      dataObj.AW = Math.random().toFixed(2);
      dataObj.AX = Math.random().toFixed(2);
      dataObj.AY = Math.random().toFixed(2);
      dataObj.AZ = Math.random().toFixed(2);
      dataObj.BA = Math.random().toFixed(2);
      dataObj.BB = Math.random().toFixed(2);
      dataObj.BC = Math.random().toFixed(2);
      dataObj.BD = Math.random().toFixed(2);
      dataObj.BE = Math.random().toFixed(2);
      dataObj.BF = Math.random().toFixed(2);
      dataObj.BG = Math.random().toFixed(2);
      dataObj.BH = Math.random().toFixed(2);
      dataObj.BJ = Math.random().toFixed(2);
      dataObj.BI = Math.random().toFixed(2);
      dataObj.BK = Math.random().toFixed(2);
      dataObj.BL = Math.random().toFixed(2);
      dataObj.BM = Math.random().toFixed(2);
      dataObj.BN = Math.random().toFixed(2);
      dataObj.BO = Math.random().toFixed(2);
      dataObj.BP = Math.random().toFixed(2);
      dataObj.BQ = Math.random().toFixed(2);
      dataObj.BR = Math.random().toFixed(2);
      dataObj.BS = Math.random().toFixed(2);
      dataObj.BT = Math.random().toFixed(2);
      dataObj.BU = Math.random().toFixed(2);
      dataObj.BV = Math.random().toFixed(2);
      dataObj.BW = Math.random().toFixed(2);
      dataObj.BX = Math.random().toFixed(2);
      dataObj.BY = Math.random().toFixed(2);
      dataObj.BZ = Math.random().toFixed(2);
      dataObj.CA = Math.random().toFixed(2);
      dataObj.CB = Math.random().toFixed(2);
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
