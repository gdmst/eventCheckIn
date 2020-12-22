import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { Command } from 'protractor';
@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.css"],
})
export class MenubarComponent implements OnInit {
  currentUser = {
    typeID: 0,
  };

  profile = {
    fname: '',
    lname: '',
    email: '',
  };

  constructor(
    private authservice: AuthenticationService,
    private router: Router
  ) {
    if (!!this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
      if(!!this.authservice.profile){
        this.profile = this.authservice.profile;
      }
    } else {
      this.currentUser = {
        typeID: 0,
      };
      this.profile = {
        fname: "",
        lname: "",
        email: "",
      };
    }
  }

  items0: MenuItem[];
  items1: MenuItem[];
  items2: MenuItem[];

  ngOnInit() {
    this.items0 = [
      {
        label: "หน้าหลัก",
        icon: "pi pi-home",
        command: (event: any) => {
          this.router.navigate([""]);
        },
      },
    ];
    this.items1 = [
      {
        label: "หน้าหลัก",
        icon: "pi pi-home",
        command: (event: any) => {
          this.router.navigate([""]);
        },
      },
      {
        label: "งานจัดอบรมที่เข้าร่วม",
        icon: "pi pi-sign-out",
        command: (event: any) => {
          this.router.navigate(["myevents"]);
        },
      },
    ];
    this.items2 = [
      {
        label: "หน้าหลัก",
        icon: "pi pi-home",
        command: (event: any) => {
          this.router.navigate([""]);
        },
      },
      {
        label: "เพิ่มงานจัดอบรม",
        icon: "pi pi-plus",
        command: (event: any) => {
          this.router.navigate(["createEvent"]);
        },
      },
    ];
  }
  goHome() {
    this.router.navigate([""]);
  }
  goToMyEvents() {
    this.router.navigate(["myevents"]);
  }

  goToLogin() {
    this.router.navigate(["userlogin"]);
  }

  goToCreate() {
    this.router.navigate(["createEvent"]);
  }
}
