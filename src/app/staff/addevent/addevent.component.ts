import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Department } from 'src/app/model/department';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  myForm: FormGroup;
  selectedDept = {
    deptID: 0,
    deptName: "ทุกแผนก",
  };



  deptList: Department[]= [
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
  constructor(public eventService: EventService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      eventID: new FormControl(null),
      eventName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
      registered: new FormControl(0),
      eventStatus:new FormControl(1),
      location: new FormControl('', [Validators.required]),
      eventProperty: new FormControl({
        deptID: 0,
        deptName: "ทุกแผนก",
      }, [Validators.required]),
    });

    if(!!this.eventService.selectedEvent) {
      this.myForm.patchValue(this.eventService.selectedEvent);
    }
  }

  saveForm(){
    const dept = this.myForm.get('eventProperty').value.deptID;
    this.myForm.get('eventProperty').setValue(dept);
    console.log(this.myForm.getRawValue());
    this.eventService.addEvent(this.myForm.getRawValue());
  }

}
