import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  currentUser = {
    "typeID": 0
  }
  constructor(private authservice: AuthenticationService, private router: Router) {

    if (!!this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    } else {
      this.currentUser = {
        "typeID": 0
      }
    }

  }

    items: MenuItem[];

    ngOnInit() {
    }
    goHome(){
      this.router.navigate(['']);
    }
    goToMyEvents() {
      this.router.navigate(['myevents']);
    }

    goToLogin() {
      this.router.navigate(['userlogin']);
    }


  goToCreate() {
    this.router.navigate(['createEvent']);
  }
}
