import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(
    public eventService: EventService,
    private router:Router,
    private regService: RegistrationService,
    private auth: AuthenticationService) { }

  ngOnInit() {
  }

  editEvent() {
    console.log(this.eventService.selectedEvent)
    this.router.navigate(['editEvent']);
  }

  backhome() {
    this.router.navigate(['events']);
  }

    attend(event){
      this.auth.getProfile();
      this.regService.registerEvent(event);
    }

}
