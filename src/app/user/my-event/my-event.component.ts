import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/service/registration.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { EventService } from 'src/app/service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {

  constructor(private reg:RegistrationService,
    private eventService: EventService,
    private authService:AuthenticationService,
    private router: Router) {

   }

  ngOnInit() {
    this.authService.getProfile();
    this.reg.getMyEvents(this.authService.profile.empID);
  }

  viewEvent(event) {
    this.eventService.selectedEvent = event;
    this.router.navigate(['eventDetail']);
  }

}
