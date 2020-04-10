
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from 'angular-fusioncharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateMapComponent } from './state-map/state-map.component';
import { CountyMapComponent } from './county-map/county-map.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


import { RouterModule, Routes } from '@angular/router';



// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Minnesota from 'fusioncharts/maps/fusioncharts.minnesota';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DeathMapComponent } from './death-map/death-map.component';
import { CasesGraphComponent } from './cases-graph/cases-graph.component';
import { DeathGraphComponent } from './death-graph/death-graph.component';
import { CasesMapComponent } from './cases-map/cases-map.component';


const appRoutes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'cases_map', component: StateMapComponent},
  { path: 'death_map', component: DeathMapComponent},
  { path: 'death_graph', component: DeathGraphComponent},
  { path: 'cases_graph', component: CasesGraphComponent},

];
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionMaps, FusionTheme, Minnesota);
@NgModule({
  declarations: [
    AppComponent,
    StateMapComponent,
    CountyMapComponent,
    HomeComponent,
    DeathMapComponent,
    CasesGraphComponent,
    DeathGraphComponent,
    CasesMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FusionChartsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
