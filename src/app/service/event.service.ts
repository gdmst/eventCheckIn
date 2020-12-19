import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Department } from '../model/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class EventService {
  selectedEvent: Event = null;
  eventList: Event[] = [
    {
      eventID: 2,
      eventName: "Node.js",
      description:
        "Count the typescript down, train your skill across the year",
      startDate: "2020-12-31",
      endDate: "2021-01-01",
      startTime: "09:00 AM",
      endTime: "06:00 PM",
      amount: 30,
      registered: 0,
      eventStatus: 0,
      location: "201/2 B",
      eventProperty: 1,
    },
  ];
  deptList: Department[] = [
    {
      deptID: 0,
      deptName: "ทุกแผนก",
    },
    {
      deptID: 1,
      deptName: "แผนกการตลาด",
    },
    {
      deptID: 2,
      deptName: "แผนกไอที",
    },
    {
      deptID: 3,
      deptName: "แผนกบัญชี"
    },
    {
      deptID: 4,
      deptName: "แผนกบุคคล"
    },
    {
      deptID: 5,
      deptName: "แผนกบริหาร"
    }
  ];

  constructor(public http: HttpClient) {
    this.getEvent();
  }

  getEvent() {
    this.http.get<Event[]>("/EventCheck-In/api/event/eventList").subscribe((value) => {
      this.eventList = value;
      console.log("get event", value);
    });
  }

  deleteEvent(eventID) {
    this.http.delete<Event[]>("/EventCheck-In/api/event/"+eventID).subscribe((value) => {
      this.getEvent();
      console.log("delete event", value);
    });
  }

  addEvent(payload) {
    this.http.post<Event[]>("/EventCheck-In/api/event/createEvent", payload).subscribe((value) => {
      this.getEvent();
      console.log("create event", value);
    });
  }

  updateEvent(payload) {
    this.http.put<Event[]>("/EventCheck-In/api/event/updateEvent", payload).subscribe((value) => {
      this.getEvent();
      console.log("update event", value);
    });
  }
}
