import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  tomorrow = new Date(2017, 9, 20, 14,34); 

  constructor() { }

  ngOnInit() {
  }

}
