import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  @Input() params: any;
  constructor() {}

  ngOnInit(): void {}
}
