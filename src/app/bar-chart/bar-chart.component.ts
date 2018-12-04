import { Component, NgModule, Input, OnInit } from '@angular/core';
import { single, multi } from '../../data';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() type: string;

  data: any;
  singleResults : any[] = single;
  multiResults :any[] = multi;
  view: any[] = [500, 400];
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

  constructor() { }

  ngOnInit() {
    switch( this.type ) {
      case 'horizontal': this.data = single; break;
      case 'vertical': this.data = single; break;
      case 'horizontal-stacked': this.data = multi; break;
      case 'vertical-stacked': this.data = multi; break;
      case 'horizontal-2d': this.data = multi; break;
      case 'vertical-2d': this.data = multi; break;
 
    }
  }
  onSelect(event) {
    console.log(event);
  }
}
