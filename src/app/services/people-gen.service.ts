import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IgxColumnComponent } from '../../../node_modules/igniteui-angular';

@Injectable({
  providedIn: 'root'
})
export class PeopleGenService {
  public records: Observable<any[]>;
  private _records: BehaviorSubject<any[]>;
  private _prevRowCount = -1;
  private _prevColCount = -1;
  public _data;
  constructor() {
      this._records = new BehaviorSubject([]);
      this.records = this._records.asObservable();
  }

  public getData() {
    this._records.next(this._data);
  }

  public buildData(rowCount: number, addlColCount: number) {
    if (this._prevRowCount !== Number(rowCount) ||
        this._prevColCount !== Number(addlColCount)) {
      rowCount = Number(rowCount);
      addlColCount = Number(addlColCount);
      this._data = this.getPeople(rowCount, addlColCount);
      this._prevRowCount = rowCount;
      this._prevColCount = addlColCount;
    }
    this._records.next(this._data);
  }


  randomInt(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  }

  getPeople(count, addlColCount): any[] {
    const p = [];
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                     'October', 'November', 'December' ];
    const streetSuffix = [ 'Street', 'Ave', 'Blvd', 'Avenue', 'St', 'Way', 'Alley', 'Parkway', 'Path', 'Vista',
                           'View', 'Trail', 'Track', 'Terrace' ];
    const directional = ['', 'North', 'N', 'West', 'W', 'East', 'E', 'South', 'S', 'NW', 'SW', 'SE', 'NE' ];
    const streetName = ['Second', 'Third', 'First', 'Fourth', 'Park', 'Main', 'Sixth', 'Oak', 'Seventh', 'Pine', 'Maple',
                       'Cedar', 'Elm', 'Eighth', 'View', 'Washington', 'Ninth', 'Lake', 'Hill', 'Lakeside', 'Hamilton', 'Lincoln',
                       'Adams', 'Jefferson', 'Madison', 'Jackson', 'Monroe'];
    const fname = [ 'Jack', 'Oliver', 'Charlie', 'Harry', 'Jacob', 'Alfie', 'Noah', 'Oscar', 'George', 'James', 'Thomas',
                    'Leo', 'Joshua', 'Logan', 'Freddie', 'Archie', 'Max', 'Henry', 'Ethan', 'Connor', 'William', 'Carter',
                    'Ryan', 'Michael', 'Malcolm', 'Sophia', 'Emma', 'Olivia', 'Ava', 'Isabella', 'Mia', 'Zoe', 'Lily', 'Emily',
                    'Madelyn', 'Madison', 'Chloe', 'Charlotte', 'Aubrey', 'Avery', 'Abigail', 'Kaylee', 'Layla', 'Harper',
                    'Ella', 'Amelia', 'Arianna', 'Riley', 'Aria', 'Hailey' ];
    const surname = [ 'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson',
                      'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark',
                      'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez',
                      'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts',
                      'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins' ];
     const language = [ 'English', 'Spanish', 'Japanese', 'Mandarin', 'French', 'Korean', 'Tagalog', 'German', 'Arabic', 'Russian',
                        'Italian', 'Vietnamese' ] ;
     const sport = [ 'Soccer', 'Football', 'Baseball', 'Golf', 'Lacrosse', 'Softball', 'Bowling', 'Curling' ];
     const city = [ 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego',
                    'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Columbus', 'Fort Worth',
                    'Charlotte', 'Seattle', 'Denver', 'El Paso', 'Detroit', 'Washington', 'Boston', 'Memphis', 'Nashville',
                    'Portland', 'Oklahoma City', 'Las Vegas', 'Baltimore', 'Louisville', 'Milwaukee', 'Albuquerque', 'Tucson',
                    'Fresno', 'Sacramento', 'Kansas City', 'Long Beach', 'Mesa', 'Atlanta', 'Colorado Springs', 'Virginia Beach',
                    'Raleigh', 'Omaha', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Wichita', 'New Orleans', 'Arlington' ];

    for (let i = 0; i < count; i++) {
     p.push(
       {
         Id: i + 1,
         Name: fname[this.randomInt(0, 49)] + ' ' + surname[this.randomInt(0, 49)],
         Age: this.randomInt(18, 65),
         BirthDay: months[this.randomInt(0, 11)] + ' ' + this.randomInt(1, 28),
         Street: streetName[this.randomInt(0, 26)] + ' ' + streetSuffix[this.randomInt(0, 14)],
         City: city[this.randomInt(0, 49)],
         Phone: this.randomInt(201, 999) + '-' + this.randomInt(211, 999) + '-' + this.randomInt(1000, 9999),
         Language: language[this.randomInt(0, 11)],
         Sports: sport[this.randomInt(0, 7)],
         IsActive: this.randomInt(0, 1) === 0
        }
      );
      for (let j = 1; j <= addlColCount; j++) {
        p[i]['AddlCol' + String(j).padStart(3, '0')] = Math.random().toFixed(2);
      }

    }
    return p;
  }

}



