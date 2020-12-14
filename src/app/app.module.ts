import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AddeventComponent } from './staff/addevent/addevent.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import {MenubarModule} from 'primeng/menubar';
import { MenubarComponent } from './components/menubar/menubar.component';
import { RegistListComponent } from './event/regist-list/regist-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './staff/adminlogin/adminlogin.component';

import {FieldsetModule} from 'primeng/fieldset';
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    AddeventComponent,
    EventDetailComponent,
    MenubarComponent,
    RegistListComponent,
    AdminloginComponent

  ],
  imports: [
    BrowserModule,
    CardModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MenubarModule,
<<<<<<< HEAD
    HttpClientModule
=======
    FieldsetModule
>>>>>>> 9607d730f5ced28b4951fd3b8ea22a7210769767
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
