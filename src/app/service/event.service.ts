import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  selectedEvent:Event = null;
  eventList: Event[] = [
    {
      eventID: 2,
      eventName: "Node.js",
      description: "Count the typescript down, train your skill across the year",
      startDate: "2020-12-31",
      endDate: "2021-01-01",
      startTime: "09:00 AM",
      endTime: "06:00 PM",
      amount: 30,
      registered: 0,
      reportURL: '',
      eventStatus: 0,
      location: '201/2 B',
      eventProperty: 1
    }
  ]

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
    }
  ];

  constructor() { }

  addEvent(event) {
    this.eventList.push(event);
  }
}
