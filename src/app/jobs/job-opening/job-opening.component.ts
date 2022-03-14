import { Component, OnInit } from '@angular/core';
import { job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.css'],
  
})
export class JobOpeningComponent implements OnInit {
 public Jobs!: job[];
 
  constructor(private jobser:JobService) { }

  ngOnInit(): void {
    this.Jobs=this.jobser.getJobs();

    
  }

}
