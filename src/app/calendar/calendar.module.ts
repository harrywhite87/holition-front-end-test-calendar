import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { CalendarRoutingModule } from './calendar-routing.module';

import { CalendarComponent } from './calendar.component';

import { YearViewComponent } from './views/year-view/year-view.component';
import { MonthViewComponent } from './views/month-view/month-view.component';
import { WeekViewComponent } from './views/week-view/week-view.component';
import { DayViewComponent } from './views/day-view/day-view.component';

import { MonthComponent } from './components/month/month.component';
import { YearComponent } from './components/year/year.component';

@NgModule({
  declarations: [
    MonthComponent,
    CalendarComponent,
    YearComponent,
    YearViewComponent,
    MonthViewComponent,
    WeekViewComponent,
    DayViewComponent,
  ],
  imports: [CommonModule, RouterModule],
  bootstrap: [CalendarComponent],
})
export class CalendarModule {}
