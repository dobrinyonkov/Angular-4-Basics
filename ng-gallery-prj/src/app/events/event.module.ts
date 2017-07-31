import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventsListComponent, EventDetailComponent, EventEditComponent]
})
export class EventModule { }
