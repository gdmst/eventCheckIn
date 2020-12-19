import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  currentUser = {
    "typeID": 0
  }
  constructor(private eventService: EventService, private router: Router,
    private auth:AuthenticationService,
    private regService: RegistrationService) {
      if (!!this.auth.currentUserValue){
        this.auth.getProfile();
      }
    }

  ngOnInit() {
    this.eventService.selectedEvent = null;
    if (!!this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    }
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

  deleteEvent(eventID){
    this.eventService.deleteEvent(eventID);
  }
}
