import { Component, OnInit, Input } from '@angular/core';
import { single, multi } from '../../data';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

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
  legendTitle = 'Barrels/day';
  legendPosition = 10;
  explodesSlices = true;
  showLabels = true;
  // doughnut = true;
  // tooltipDiasabled = false;
  // pieTooltipText = "Oil Imports";

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

  constructor() { }

  ngOnInit() {
  }

}
