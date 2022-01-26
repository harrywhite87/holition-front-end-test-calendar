import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
})
export class MonthComponent implements OnInit, OnChanges {
  @Input() year: any;
  @Input() activeMonth: any;
  @Input() month: any = 0;
  @Input() day: any;
  monthName: any = '';
  months: String[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  startDate: any;
  endDate: any;
  days: any = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year']) {
      this.run();
    }
  }
  run() {
    this.days = [];
    this.monthName = this.months[this.month];
    var firstDay = new Date(this.year, this.month, 1);
    var lastDay = new Date(this.year, this.month + 1, 0);
    this.startDate = this.getMonday(firstDay);
    this.endDate = this.addDays(this.getMonday(lastDay), 6);
    let i = 0;
    for (
      let d = this.startDate;
      d.getTime() <= this.endDate.getTime();
      d = this.addDays(d, 1)
    ) {
      const column = i - Math.floor(i / 7) * 7 + 1;
      const row = Math.floor(i / 7) + 1;
      this.days.push({
        date: d,
        column: column,
        row: row,
        day: d.getDate(),
        inMonth: d.getMonth() === this.month,
      });
      i++;
    }
  }
  getMonday(d: any) {
    d = new Date(d);
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }
  addDays(date: any, days: any) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
