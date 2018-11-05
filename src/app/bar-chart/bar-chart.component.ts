import { Component, NgModule, Input } from '@angular/core';
import { single, multi } from '../../data';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() type: string;

  singleResults : any[] = single;
  multiResults :any[] = multi;
  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Barrels/day';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {

  }

  onSelect(event) {
    console.log(event);
  }
}
