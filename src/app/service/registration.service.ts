import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  selectedEvent: Event = null;
  participants: Registration[] = [
    {
      registID: 1,
      checkInDateTime: null,
      registDateTime: "00:00",
      status: 0,
      evt: {
        eventID:1,
        eventName: "Node.js",
        description: "Count the typescript down, train your skill across the year",
        startDate: "2020-12-31",
        endDate: "2021-01-01",
        startTime: "09:00 AM",
        endTime: "06:00 PM",
        amount: 30,
        registered: 0,
        eventStatus: 0,
        location: '201/2 B',
        eventProperty: 1
      },
      emp: {
        empID: 1,
        fname: "Anapat",
        lname: "Kamdaeng",
        email: "ana ",
        dept:{
          deptID:1,
          deptName:"Marketing"
        },
        user: {
          userID: 1,
          username: "anapt",
          password: "password"
        }
      }
    }
  ]
  constructor() { }
}
