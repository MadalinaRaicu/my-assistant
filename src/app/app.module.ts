import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './modules/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TimeChartComponent } from './time-chart/time-chart.component';
import { CardChartComponent } from './card-chart/card-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent,
    TimeChartComponent,
    CardChartComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'my-oil-analyst'),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
