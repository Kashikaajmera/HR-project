import { Injectable } from '@angular/core';
import { job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private Jobs: job[]=[
    new job('Android','required skill:test ','https://cdn.iconscout.com/icon/premium/png-256-thumb/online-course-8-899132.png'),
    new job('HR Executive','required skill:test ','https://cdn.iconscout.com/icon/premium/png-256-thumb/online-course-8-899132.png'),
    new job('Java Developer','required skill:test ','https://cdn.iconscout.com/icon/premium/png-256-thumb/online-course-8-899132.png'),
    new job('Business Development Manager','required skill:test ','https://cdn.iconscout.com/icon/premium/png-256-thumb/online-course-8-899132.png'),
    new job('Business Development Manager','required skill:test ','https://cdn.iconscout.com/icon/premium/png-256-thumb/online-course-8-899132.png'),
  
  ]

 getJobs(){
   return this.Jobs.slice();
 }
 getJob(index:number){
   return this.Jobs.slice()[index];
 }
 
  constructor() { }
}
