import { Component, Input, OnInit } from '@angular/core';
import { job } from '../../job.model';
import { JobService } from '../../job.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  @Input() job!: job;
  @Input()
  index!: number;
  constructor(private jobser: JobService) { }

  ngOnInit(): void {
  
  }

}
