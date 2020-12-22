import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/service/registration.service';
import { EventService } from 'src/app/service/event.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(
    private eventService: EventService,
      private regService: RegistrationService) {
       
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


