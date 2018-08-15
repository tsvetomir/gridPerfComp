import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridModule } from 'ag-grid-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule,
        IgxRippleModule, IgxGridModule, IgxDropDownModule } from 'igniteui-angular';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { IgxGridBaseComponent } from './igxgrid-base/igxgrid-base.component';
import { IgxGridWithFeaturesComponent } from './igxgrid-withFeatures/igxgrid-withFeatures.component';

import { AgGridBaseComponent } from './ag-grid-base/ag-grid-base.component';
import { AgGridWithFeaturesComponent } from './ag-grid-withFeatures/ag-grid-withFeatures.component';

import { KendouiGridBaseComponent } from './kendoui-grid-base/kendoui-grid-base.component';
import { WijmoGridBaseComponent } from './wijmo-grid-base/wijmo-grid-base.component';

import { PeopleGenService } from './services/people-gen.service';
import { DataGenService } from './services/data-gen.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IgxGridBaseComponent,
    IgxGridWithFeaturesComponent,
    AgGridBaseComponent,
    AgGridWithFeaturesComponent,
    KendouiGridBaseComponent,
    WijmoGridBaseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxDropDownModule,

    IgxGridModule.forRoot(),
    AgGridModule.withComponents([]),
    GridModule,
    WjGridModule

  ],
  providers: [PeopleGenService, DataGenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
