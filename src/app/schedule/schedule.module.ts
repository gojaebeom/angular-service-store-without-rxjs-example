import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScheduleAddComponent } from './components/schedule-add.component';
import { ScheduleItemComponent } from './components/schedule-item.component';
import { ScheduleStoreService } from './schedule-store.service';
import { SchedulePage } from './schedule.page';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SchedulePage, ScheduleAddComponent, ScheduleItemComponent],
  exports: [SchedulePage],
  providers: [ScheduleStoreService],
})
export class ScheduleModule {}
