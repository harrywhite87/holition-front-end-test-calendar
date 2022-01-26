import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss'],
})
export class YearComponent implements OnInit {
  @Input() year: any;
  @Input() month: any;
  @Input() day: any;

  constructor() {}

  ngOnInit(): void {}
}
