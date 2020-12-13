import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event/event-list/event-list.component';
import { AddeventComponent } from './staff/addevent/addevent.component';


const routes: Routes = [
  {
  path: 'events',
  component: EventListComponent
  }, {
    path: 'createEvent',
    component: AddeventComponent
  }, {
    path: 'editEvent',
    component: AddeventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
