import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Schedule } from '../../types/schedule.type';
import { ScheduleStoreService } from '../schedule-store.service';

@Component({
  selector: 'app-schedule-add',
  template: `
  <form (submit)="onSubmit()" #scheduleForm="ngForm">
    <input name="title" ngModel/>
    <br/>
    <textarea name="content" ngModel></textarea>
    <br/>
    <button>추가</button> 
  </form>
  `,
})
export class ScheduleAddComponent {
  @ViewChild('scheduleForm') scheduleForm: NgForm;
  @Output() message = new EventEmitter<string>();

  constructor(private scheduleStoreService: ScheduleStoreService) {}

  onSubmit() {
    this.scheduleStoreService.addSchedule(this.scheduleForm.value);
    this.scheduleForm.reset();
    this.message.emit('schedule added!');
  }
}
