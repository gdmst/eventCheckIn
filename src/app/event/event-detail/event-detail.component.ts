import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(public eventService: EventService, private router:Router) { }

  ngOnInit() {
  }

  editEvent(event) {
    this.eventService.selectedEvent = event;
    this.router.navigate(['editEvent']);

  }

  backhome() {
    this.router.navigate(['events']);
  }


}
