import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {
 

  job!: job;
  id!: number;
   constructor(private jobser:JobService,
     private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
  this.route.params.subscribe(
    (params:Params)=>{
      this.id= +params['id'];
      this.job=this.jobser.getJob(this.id);

    }
  );
  }
  onApply(){
    this.router.navigate(['jobs/applicationForm',])
  }
}