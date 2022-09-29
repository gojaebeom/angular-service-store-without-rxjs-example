import { Component, OnChanges } from '@angular/core';
import { Schedule } from '../types/schedule.type';
import { ScheduleStoreService } from './schedule-store.service';

@Component({
  selector: 'app-schedule-page',
  template: `
  <div>
    schedule pages
    <app-schedule-add
      (message)="callMessage($event)"
    ></app-schedule-add>
    <ul>
      <app-schedule-item 
        *ngFor="let schedule of schedules"
        [schedule]="schedule"
        (message)="callMessage($event)"
      ></app-schedule-item>
    </ul>
  </div>
  `,
})
export class SchedulePage implements OnChanges {
  schedules: Schedule[] = [];

  constructor(private scheduleStoreService: ScheduleStoreService) {}

  ngOnChanges() {
    console.log(this.scheduleStoreService.getSchedule());
  }

  callMessage(message: string) {
    console.log(message);
    this.schedules = this.scheduleStoreService.getSchedule();
    console.log(this.schedules);
  }
}
