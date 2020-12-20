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
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {FieldsetModule} from 'primeng/fieldset';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { MyEventComponent } from './user/my-event/my-event.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    AddeventComponent,
    EventDetailComponent,
    MenubarComponent,
    RegistListComponent,
    AdminloginComponent,
    UserloginComponent,
    MyEventComponent

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
    HttpClientModule,
    FieldsetModule,
    MessageModule,
    MessagesModule,
    TableModule,
    TabMenuModule,
    OverlayPanelModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
