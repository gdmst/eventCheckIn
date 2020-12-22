import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class ReportService {
  presentList = [];
  absentList = [];

  constructor(public http: HttpClient) {}

  getAbsent(eventID) {
    this.http.get("/EventCheck-In/api/event/registrationList/"+eventID).subscribe((value) => {

      console.log("get particapants", value);
    },
    err => {

    });
  }
}
