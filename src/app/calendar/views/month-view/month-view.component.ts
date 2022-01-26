import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
})
export class MonthViewComponent implements OnInit {
  @Input() params: any;
  constructor() {}

  ngOnInit(): void {}
}
