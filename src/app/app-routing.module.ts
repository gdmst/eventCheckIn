import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event/event-list/event-list.component';
import { AddeventComponent } from './staff/addevent/addevent.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { AdminloginComponent } from './staff/adminlogin/adminlogin.component';
import { AuthGuard } from './auth.guard';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { MyEventComponent } from './user/my-event/my-event.component';
import { UserAuthGuard } from './user/user-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: EventListComponent
  },{
  path: 'events',
  component: EventListComponent
  }, {
    path: 'createEvent',
    component: AddeventComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'editEvent',
    component: AddeventComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'eventDetail',
    component: EventDetailComponent
  }, {
    path: 'adminlogin',
    component: AdminloginComponent
  }, {
    path: 'userlogin',
    component: UserloginComponent
  }
  , {
    path: 'myevents',
    component: MyEventComponent,
  canActivate: [UserAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
