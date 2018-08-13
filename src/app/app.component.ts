import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { routes } from './app-routing.module';

import { IgxNavigationDrawerComponent,
         CloseScrollStrategy ,
         ConnectedPositioningStrategy,
         HorizontalAlignment,
         IgxDropDownComponent,
         VerticalAlignment } from 'igniteui-angular';
import { PeopleGenService } from './services/people-gen.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public topNavLinks: Array<{
    path: string,
    name: string
  }> = [];
  public rowCount = 100;
  public rowCountText = 'Rows: ${rowCount}';
  public rowCounts = [100, 1000, 10000, 100000, 1000000];
  @ViewChild('ddRowCount', { read: IgxDropDownComponent })
  public ddRowCount: IgxDropDownComponent;
  @ViewChild(IgxNavigationDrawerComponent) public navdrawer: IgxNavigationDrawerComponent;


  private _positionSettings = {
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Bottom
};
private _overlaySettings = {
  closeOnOutsideClick: true,
  modal: false,
  positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
  scrollStrategy: new CloseScrollStrategy()
};

  constructor(private router: Router, private people: PeopleGenService) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data.text,
          path: '/' + route.path
        });
      }
    }
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((x) => x instanceof NavigationStart)
    )
      .subscribe((event: NavigationStart) => {
          if (event.url !== '/' && !this.navdrawer.pin) {
              // Close drawer when selecting a view on mobile (unpinned)
              this.navdrawer.close();
          }
      });

      // this.ddRowCount.setSelectedItem(0);
      this.selectRowCount(undefined);
  }

  public toggleDropDown(eventArgs) {
    this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
    this.ddRowCount.toggle(this._overlaySettings);
}
  public selectRowCount(eventArgs) {
    if (this.ddRowCount) {
      this.rowCount = Number(this.ddRowCount.selectedItem.element.nativeElement.innerHTML);
    }
    this.people.getData(this.rowCount);


  }

}
