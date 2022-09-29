import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schedule } from '../../types/schedule.type';
import { ScheduleStoreService } from '../schedule-store.service';

@Component({
  selector: 'app-schedule-item',
  template: `
  <li>
    <span>{{schedule.title}}</span>
    <br/>
    <span>{{schedule.content}}</span>
    <br/>
    <button (click)="onEditSchedule()">수정</button>
    <button (click)="onDestroySchedule()">삭제</button>
  </li>
  `,
})
export class ScheduleItemComponent {
  @Input() schedule: Schedule;
  @Output() message = new EventEmitter<string>();

  constructor(private scheduleStoreService: ScheduleStoreService) {}

  onEditSchedule() {
    const titleResult = window.prompt('제목을 수정하세요', this.schedule.title);
    if (!titleResult) {
      return;
    }

    const contentResult = window.prompt(
      '내용을 수정하세요',
      this.schedule.content
    );
    if (!contentResult) {
      return;
    }

    this.scheduleStoreService.editSchedule({
      ...this.schedule,
      title: titleResult,
      content: contentResult,
    });

    this.message.emit('schedule changed!');
  }

  onDestroySchedule() {
    const result = window.confirm('정말 삭제하시겠어요?');
    if (!result) {
      return;
    }
    this.scheduleStoreService.destorySchedule(this.schedule.id);

    this.message.emit('schedule deleted!');
  }
}
