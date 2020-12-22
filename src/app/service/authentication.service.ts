import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EmployeeUser } from '../model/employee-user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  profile: EmployeeUser = {
    empID: 0,
    fname: "",
    lname: "",
    email: "",
    dept: {
      deptID: 0,
      deptName: "",
    },
    user: null,
  };

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userName, password) {
    return this.http
      .post<any>("EventCheck-In/api/User/login", { userName, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          //console.log(user);
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  loginUser(userName, password) {
    return this.http
      .post<any>("EventCheck-In/api/User/login", { userName, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          //console.log(user);
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem("currentUser");
    this.profile = null;
    this.currentUserSubject.next(null);
    window.location.href = "/userlogin";
  }

  getProfile() {
    const userID = this.currentUserValue.userID;
    this.http
      .get<EmployeeUser>("/EventCheck-In/api/User/getProfile/" + userID)
      .subscribe((value) => {
        this.profile = value;
        //console.log(this.profile);
      });
  }
}
