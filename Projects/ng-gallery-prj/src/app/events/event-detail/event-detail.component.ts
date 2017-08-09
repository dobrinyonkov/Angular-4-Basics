import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventService } from './../event.service';
import { Event } from './../event.model';
import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  id: number;
  lat = 51.678418;
  lng = 7.809007;
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.event = this.eventService.getEvent(this.id);
      }
      );

  }

}

