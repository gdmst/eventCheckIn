import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-regist-list',
  templateUrl: './regist-list.component.html',
  styleUrls: ['./regist-list.component.css'],
})
export class RegistListComponent implements OnInit {
  currentUser = {
    "typeID": 0
  }
  constructor(private eventService: EventService,
    private regService: RegistrationService,
    private auth: AuthenticationService) {

    this.regService.getRegistration(this.eventService.selectedEvent.eventID);
    if (!!this.auth.currentUserValue) {
      this.auth.getProfile();
      this.currentUser = this.auth.currentUserValue;
    }
   }

  ngOnInit() {
  }
  checkinEvent(reg) {
    const eventID = this.eventService.selectedEvent.eventID;
    const empID = reg.empUser.empID;
    this.regService.checkinEvent(eventID, empID);
  }


  cancelregist(reg) {
    const regist = {
      "evt": this.eventService.selectedEvent,
      "empUser": reg.empUser
    }
    const eventID = this.eventService.selectedEvent.eventID;
    this.regService.cancel(eventID, regist);
  }


}
