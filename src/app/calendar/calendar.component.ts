import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  timeFrame: any;
  params = {
    timeframe: 'year',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDay(),
  };
  loaded: boolean = false;
  dateChange = 0;
  constructor(private route: ActivatedRoute) {}
  @HostListener('mousewheel', ['$event']) onMousewheel(event: any) {
    if (event.wheelDeltaY > 0) {
      this.changeDate(-1);
    } else {
      this.changeDate(1);
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramsMap: any) => {
      const params = paramsMap.params;
      const d = new Date();
      this.params.timeframe = params.timeframe || 'year';
      this.params.year = Number(params.year) || d.getFullYear();
      this.params.month = Number(params.month) || d.getMonth() + 1;
      this.params.day = Number(params.day) || d.getDate();

      this.loaded = true;
    });
  }
  changeDate(action: any) {
    if (action === -1 && this.params.timeframe === 'year') {
      this.dateChange = -1;
      setTimeout(() => (this.dateChange = 0), 800);
    }
    if (action === 0 && this.params.timeframe === 'year') {
      this.dateChange += new Date().getFullYear() - this.params.year;
      // this.params.year = new Date().getFullYear();
    }
    if (action === 1 && this.params.timeframe === 'year') {
      this.dateChange = 1;
      setTimeout(() => (this.dateChange = 0), 800);

      // setTimeout(() => this.params.year++, 600);
    }
  }
  // resetDate(e){
  //   this.dateChange = 0
  // }
}
