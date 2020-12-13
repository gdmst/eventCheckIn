import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  viewEvent(event) {
    this.eventService.selectedEvent = event;
    this.router.navigate(['eventDetail']);
  }

  editEvent(event){
    console.log(event);
    this.eventService.selectedEvent = event;
    this.router.navigate(['editEvent']);
  }

}
