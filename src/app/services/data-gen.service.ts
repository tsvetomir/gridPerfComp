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
      dataObj.A = Math.random();
      dataObj.B = this.currentDate;
      dataObj.C = Math.random();
      dataObj.D = this.currentDate;
      dataObj.E = Math.random();
      dataObj.F = this.currentDate;
      dataObj.G = Math.random();
      dataObj.H = this.currentDate;
      dataObj.I = Math.random();
      dataObj.J = this.currentDate;
      dataObj.K = Math.random();
      dataObj.L = this.currentDate;
      dataObj.M = Math.random();
      dataObj.N = this.currentDate;
      dataObj.O = Math.random();
      dataObj.P = this.currentDate;
      dataObj.Q = Math.random();
      dataObj.R = this.currentDate;
      dataObj.S = Math.random();
      dataObj.T = this.currentDate;
      dataObj.U = Math.random();
      dataObj.V = this.currentDate;
      dataObj.W = Math.random();
      dataObj.X = Math.random();
      dataObj.Y = Math.random();
      dataObj.Z = Math.random();
      dataObj.AA = Math.random();
      dataObj.AB = Math.random();
      dataObj.AC = Math.random();
      dataObj.AD = Math.random();
      dataObj.AE = Math.random();
      dataObj.AF = Math.random();
      dataObj.AG = Math.random();
      dataObj.AH = Math.random();
      dataObj.AI = Math.random();
      dataObj.AJ = Math.random();
      dataObj.AK = Math.random();
      dataObj.AL = Math.random();
      dataObj.AM = Math.random();
      dataObj.AN = Math.random();
      dataObj.AO = Math.random();
      dataObj.AP = Math.random();
      dataObj.AQ = Math.random();
      dataObj.AR = Math.random();
      dataObj.AS = Math.random();
      dataObj.AT = Math.random();
      dataObj.AU = Math.random();
      dataObj.AV = Math.random();
      dataObj.AW = Math.random();
      dataObj.AX = Math.random();
      dataObj.AY = Math.random();
      dataObj.AZ = Math.random();
      dataObj.BA = Math.random();
      dataObj.BB = Math.random();
      dataObj.BC = Math.random();
      dataObj.BD = Math.random();
      dataObj.BE = Math.random();
      dataObj.BF = Math.random();
      dataObj.BG = Math.random();
      dataObj.BH = Math.random();
      dataObj.BJ = Math.random();
      dataObj.BI = Math.random();
      dataObj.BK = Math.random();
      dataObj.BL = Math.random();
      dataObj.BM = Math.random();
      dataObj.BN = Math.random();
      dataObj.BO = Math.random();
      dataObj.BP = Math.random();
      dataObj.BQ = Math.random();
      dataObj.BR = Math.random();
      dataObj.BS = Math.random();
      dataObj.BT = Math.random();
      dataObj.BU = Math.random();
      dataObj.BV = Math.random();
      dataObj.BW = Math.random();
      dataObj.BX = Math.random();
      dataObj.BY = Math.random();
      dataObj.BZ = Math.random();
      dataObj.CA = Math.random();
      dataObj.CB = Math.random();
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
