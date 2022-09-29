import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScheduleModule } from './schedule/schedule.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ScheduleModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
