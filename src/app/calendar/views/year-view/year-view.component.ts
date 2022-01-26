import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss'],
})
export class YearViewComponent implements OnInit, OnChanges {
  @Input() params: any;
  @Input() dateChange: any;
  modify = {
    zIndex1: 1,
    zIndex2: -1,
    transformY: 0,
    newYear: 0,
  };
  tempDate = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateChange']) {
      this.tempDate = this.params.year + this.dateChange;
      requestAnimationFrame(() => this.animate());
    }
  }
  animate() {
    if (this.dateChange !== 0) {
      const modify = this.modify;
      // number of seconds to animate
      const seconds = 0.6;
      modify.transformY += (100 / seconds / 60) * -this.dateChange;
      if (modify.transformY > 100 || modify.transformY < -100) {
        modify.zIndex1 = -1;
        modify.zIndex2 = 1;
        modify.transformY = 0;
        this.params.year += this.dateChange;
        this.dateChange = 0;
        requestAnimationFrame(() => {
          modify.zIndex1 = 1;
          modify.zIndex2 = -1;
        });
      } else {
        requestAnimationFrame(() => this.animate());
      }
    }
  }
}
