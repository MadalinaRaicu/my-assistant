import { Component, OnInit, Input } from '@angular/core';
import { timemulti, generateData } from '../../data';

@Component({
  selector: 'time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.scss']
})
export class TimeChartComponent implements OnInit {

  @Input() type: string;
  results: any[] = timemulti;
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
  legendTitle = 'Barrels/day';
  legendPosition = 10;
  showLabels = true;
  showGridlines=true;
  dateData = generateData(5, false);


  constructor() { }

  ngOnInit() {
  }

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(event) {
    console.log(event);
  }

  onLegendLabelClick(event) {
    console.log(event, "legend clicked");
  }

  dblClick(event) {
    console.log(event, "double click");
  }

}
