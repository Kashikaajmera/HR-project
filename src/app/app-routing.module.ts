import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobProfileComponent } from './jobs/job-profile/job-profile.component';
import { JobOpeningComponent } from './jobs/job-opening/job-opening.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
//   {path: '' , component:DashboardComponent,pathMatch:'full'},
//   {path: 'jobs' ,component:JobsComponent,children:[
//    {path:'jobsopening',component:JobOpeningComponent}
//  ]},

  {path: '' , component:DashboardComponent,pathMatch:'full'},
   {path: 'jobs' ,component:JobsComponent},
   {path:'employee', component:EmployeeComponent},
    {path:'jobs/jobsopening',component:JobOpeningComponent},
    {path:'jobs/jobsopening/:id',component:JobProfileComponent},
    {path:'jobs/applicationForm' , component:ApplicationFormComponent}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
