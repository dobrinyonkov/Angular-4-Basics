import { EventService } from './../../events/event.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-event',
  templateUrl: './submit-event.component.html',
  styleUrls: ['./submit-event.component.css']
})
export class SubmitEventComponent implements OnInit {
  submitEventForm: FormGroup;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.submitEventForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, Validators.required),
      'endDate': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.eventService.addEvent(this.submitEventForm.value);
  }

}
