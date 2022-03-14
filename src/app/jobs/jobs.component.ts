import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from './job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers:[JobService]
})
export class JobsComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
onJobOpening(){
this.router.navigate(['jobsopening'], {relativeTo:this.route});
}
onApplying(){
  this.router.navigate(['applicationForm'], {relativeTo:this.route});
  }
}
