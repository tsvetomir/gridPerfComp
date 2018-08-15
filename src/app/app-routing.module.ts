import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { IgxGridBaseComponent } from './igxgrid-base/igxgrid-base.component';
import { IgxGridWithFeaturesComponent } from './igxgrid-withFeatures/igxgrid-withFeatures.component';

import { AgGridBaseComponent } from './ag-grid-base/ag-grid-base.component';
import { AgGridWithFeaturesComponent } from './ag-grid-withFeatures/ag-grid-withFeatures.component';

import { KendouiGridBaseComponent } from './kendoui-grid-base/kendoui-grid-base.component';
import { KendouiGridWithFeaturesComponent } from './kendoui-grid-withFeatures/kendoui-grid-withFeatures.component';

import { WijmoGridBaseComponent } from './wijmo-grid-base/wijmo-grid-base.component';
import { WijmoGridWithFeaturesComponent } from './wijmo-grid-withFeatures/wijmo-grid-withFeatures.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'igxgrid-base', component: IgxGridBaseComponent, data: { text: 'igxGrid' } },
  { path: 'aggrid-base', component: AgGridBaseComponent, data: { text: 'ag-Grid' } },
  { path: 'kendouigrid-base', component: KendouiGridBaseComponent, data: { text: 'kendoui Grid' } },
  { path: 'wijmogrid-base', component: WijmoGridBaseComponent, data: { text: 'wijmo Grid' } },
  { path: 'aggrid-withFeatures', component: AgGridWithFeaturesComponent, data: { text: 'ag-Grid with Features' } },
  { path: 'igxgrid-withFeatures', component: IgxGridWithFeaturesComponent, data: { text: 'igxGrid with Features' } },
  { path: 'kendouigrid-withFeatures', component: KendouiGridWithFeaturesComponent, data: { text: 'kendoui Grid with Features' } },
  { path: 'wijmogrid-withFeatures', component: WijmoGridWithFeaturesComponent, data: { text: 'wijmo Grid with Features' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
