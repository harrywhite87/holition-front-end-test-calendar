import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
})
export class DayViewComponent implements OnInit {
  @Input() params: any;
  constructor() {}

  ngOnInit(): void {}
}
