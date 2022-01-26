import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { DayViewComponent } from './calendar/views/day-view/day-view.component';
import { WeekViewComponent } from './calendar/views/week-view/week-view.component';
import { MonthViewComponent } from './calendar/views/month-view/month-view.component';
import { YearViewComponent } from './calendar/views/year-view/year-view.component';

const calendarChildren = [
  { path: 'week', component: YearViewComponent },
  { path: 'week/:year', component: YearViewComponent },
  { path: 'week/:year/:month', component: YearViewComponent },
  { path: 'week/:year/:month/:day', component: YearViewComponent },
  { path: 'month', component: YearViewComponent },
  { path: 'month/:year', component: YearViewComponent },
  { path: 'month/:year/:month', component: YearViewComponent },
  { path: 'month/:year/:month/:day', component: YearViewComponent },
  { path: 'year', component: YearViewComponent },
  { path: 'year/:year', component: YearViewComponent },
  { path: 'year/:year/:month', component: YearViewComponent },
  { path: 'year/:year/:month/:day', component: YearViewComponent },
];
const routes: Routes = [
  { path: '', redirectTo: '/calendar/year', pathMatch: 'full' },
  { path: 'calendar', redirectTo: '/calendar/year', pathMatch: 'full' },
  { path: 'calendar/:timeframe', component: CalendarComponent },
  { path: 'calendar/:timeframe/:year', component: CalendarComponent },
  { path: 'calendar/:timeframe/:year/:month', component: CalendarComponent },
  {
    path: 'calendar/:timeframe/:year/:month/:day',
    component: CalendarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
