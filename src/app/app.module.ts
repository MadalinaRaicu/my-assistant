import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './modules/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VerticalTimelineModule } from 'angular-vertical-timeline';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TimeChartComponent } from './time-chart/time-chart.component';
import { CardChartComponent } from './card-chart/card-chart.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent,
    TimeChartComponent,
    CardChartComponent,
    TimelineComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'my-oil-analyst'),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    VerticalTimelineModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
