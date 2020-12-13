import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(public eventService: EventService) { }

  ngOnInit() {
  }

  editEvent(event) {
    this.eventService.selectedEvent = event;

  }

}
