import { Event } from './event.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  events: Event[] = [
    new Event(
      'Test Name',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Test Startdate',
      'Test EndDate',
      'test Location'),
    new Event(
      'Test Name',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Test Startdate',
      'Test EndDate',
      'test Location'),
    new Event(
      'Test Name',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Test Startdate',
      'Test EndDate',
      'test Location'),
    new Event(
      'Test Name',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Test Startdate',
      'Test EndDate',
      'test Location'),
  ];
  constructor() { }

  getEvents() {
    return this.events.slice();
  }

  getEvent(index: number) {
    return this.events[index];
  }

  addEvent(event: Event) {
    this.events.push(event);
  }

}
