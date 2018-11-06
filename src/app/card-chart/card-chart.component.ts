import { Component, OnInit, Input } from '@angular/core';
import { single, multi} from '../../data';
const monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
const weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });

@Component({
  selector: 'card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss']
})
export class CardChartComponent implements OnInit {

  @Input() type: string; 

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
    data: any;
  
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
    switch (this.type) {
      case 'heat-map': this.data = multi; break;
      case 'calendar': this.data = this.getCalendarData(); break;
      case 'tree-map': this.data = single; break;
      case 'number-card': this.data = single; // generate date data without range
      default: this.data = single;
    }
  }

  getCalendarData(): any[] {
    // today
    const now = new Date();
    const todaysDay = now.getDate();
    const thisDay = new Date(now.getFullYear(), now.getMonth(), todaysDay);

    // Monday
    const thisMonday = new Date(thisDay.getFullYear(), thisDay.getMonth(), todaysDay - thisDay.getDay() + 1);
    const thisMondayDay = thisMonday.getDate();
    const thisMondayYear = thisMonday.getFullYear();
    const thisMondayMonth = thisMonday.getMonth();

    // 52 weeks before monday
    const calendarData = [];
    const getDate = d => new Date(thisMondayYear, thisMondayMonth, d);
    for (let week = -52; week <= 0; week++) {
      const mondayDay = thisMondayDay + week * 7;
      const monday = getDate(mondayDay);

      // one week
      const series = [];
      for (let dayOfWeek = 7; dayOfWeek > 0; dayOfWeek--) {
        const date = getDate(mondayDay - 1 + dayOfWeek);

        // skip future dates
        if (date > now) {
          continue;
        }

        // value
        const value = dayOfWeek < 6 ? date.getMonth() + 1 : 0;

        series.push({
          date,
          name: weekdayName.format(date),
          value
        });
      }

      calendarData.push({
        name: monday.toString(),
        series
      });
    }

    return calendarData;
  }

}
