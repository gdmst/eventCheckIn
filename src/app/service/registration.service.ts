import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';
import { HttpClient } from '@angular/common/http';
import { RegistInfo } from '../model/regist-info';
import { AuthenticationService } from './authentication.service';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  selectedEvent: Event = null;
  participants: Registration[] = []
  myEvents:Event[] = [];
  constructor(public http: HttpClient, private auth: AuthenticationService, private eventService: EventService) {


  }

  registerEvent(event) {
    const emp = this.auth.profile;
    const payload = {
      "evt": event,
      "emp": emp
    }
    this.http.post<any>("/EventCheck-In/api/register/registEvent", payload).subscribe((value) => {
      //this.getRegisterd();
      console.log("regist event", payload);
    });
    this.eventService.getEvent;
  }

  getRegistration(eventID) {
    this.http.get<Registration[]>("/EventCheck-In/api/event/registrationList/"+eventID).subscribe((value) => {
      this.participants = value;
      console.log("get particapants", value);
    });
  }

  checkinEvent(eventID,empID){
    const payload ={};
    this.http.put<Registration[]>("/EventCheck-In/api/register/checkin/"+eventID+"/"+empID, payload).subscribe((value) => {
      this.getRegistration(eventID);
      console.log("check in particapants", value);
    });
  }
  cancel(eventID, payload) {
    this.http.put<Registration>("/EventCheck-In/api/register/cancelRegistration", payload).subscribe((value) => {
      this.getRegistration(eventID);
      console.log("de", value);
    });
  }
  getMyEvents(empID) {
    this.http.get<Event[]>("/EventCheck-In/api/User/myEvent/" + empID).subscribe((value) => {
      this.myEvents = value;
      console.log("get Events", value);
    });
  }


}
