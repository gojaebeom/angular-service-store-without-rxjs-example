import { Injectable } from '@angular/core';
import { AddSchedule, EditSchedule, Schedule } from '../types/schedule.type';

@Injectable()
export class ScheduleStoreService {
  private autoIncrementId = 1;
  private schedules: Schedule[] = [];

  getSchedule() {
    return this.schedules;
  }

  addSchedule(schedule: AddSchedule) {
    this.schedules.push({
      id: this.autoIncrementId++,
      ...schedule,
    });
  }

  editSchedule(changedSchedule: EditSchedule) {
    const results = this.schedules.map((currentSchedule) => {
      if (currentSchedule.id === changedSchedule.id) {
        return changedSchedule;
      }
      return currentSchedule;
    });
    this.schedules = results;
  }

  destorySchedule(toBeDeletedScheduleId: number) {
    const results = this.schedules.filter(
      (currentSchedule) => currentSchedule.id !== toBeDeletedScheduleId
    );
    this.schedules = results;
  }
}
