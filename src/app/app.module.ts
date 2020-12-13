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
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    AddeventComponent,
    EventDetailComponent,
    MenubarComponent

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
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
