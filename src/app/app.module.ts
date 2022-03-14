import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import { JobsComponent } from './jobs/jobs.component'

import { JobOpeningComponent } from './jobs/job-opening/job-opening.component';
import { JobListComponent } from './jobs/job-opening/job-list/job-list.component';
import { JobProfileComponent } from './jobs/job-profile/job-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import {DividerModule} from 'primeng/divider';
import { ApplicationFormComponent } from './application-form/application-form.component';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChipsModule} from 'primeng/chips';
import { EmployeeComponent } from './employee/employee.component';

import {TableModule} from 'primeng/table';
import { EmployeeService } from './employee/employee.service';
import {AccordionModule} from 'primeng/accordion'; 
import {ToastModule} from 'primeng/toast';    

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService,MessageService,ConfirmEventType} from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';

import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobsComponent,
    JobOpeningComponent,
    JobListComponent,
    JobProfileComponent,
    NavbarComponent,
    ApplicationFormComponent,
    EmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ToastModule,
    DividerModule,
    DropdownModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChipsModule,
    TableModule,
    AccordionModule,
    MessagesModule,
    ConfirmPopupModule,
    ChartModule
 
  
    
  ],
  providers: [EmployeeService,ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
