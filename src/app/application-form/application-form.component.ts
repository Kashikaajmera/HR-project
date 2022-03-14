
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { job } from '../jobs/job.model';
import { JobService } from '../jobs/job.service';
import { Application } from './application-form.model';


@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  date1!: Date;
  date3!: Date;
  es!: { firstDayOfWeek: number; dayNames: string[]; dayNamesShort: string[]; dayNamesMin: string[]; monthNames: string[]; monthNamesShort: string[]; today: string; clear: string; };
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Date[];
  gender =['male','female','other'];
  values1!: string[];
  skills!: [];

  checkedMain:boolean=false;
  uploadedFiles: any[] = [];

  applicationForm!:FormGroup;
  user : Application = new Application()


  constructor(private jobser:JobService) { 
  
  }

  ngOnInit() {
this.applicationForm=new FormGroup({
  'position':new FormControl(null,Validators.required),
  'firstname':new FormControl(null,Validators.required),
  'lastname':new  FormControl(null,Validators.required),
  'email':new FormControl(null,[Validators.required,Validators.email]),
  'mobile':new FormControl(null,[Validators.required,Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]),
  'alternateMobile':new FormControl(null,Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)),
  'dateOfBirth':new FormControl(null,Validators.required),
  'gender':new FormControl(null,Validators.required),
  'permanentAdd': new FormGroup({
    'line1': new FormControl(null,Validators.required),
    'line2': new FormControl(null),
    'city':new FormControl(null,Validators.required),
    'state':new FormControl(null,Validators.required)
  }),
 
  'currentEmploymentStatus':new FormControl(null,Validators.required),
  'skills':new FormControl(null),
  'projectlink':new FormControl(null)

});


 
  
}
onSubmit(): void{

  this.user = this.applicationForm.value;
 
    
  console.log(this.user);

  this.applicationForm.reset();
}

}
  


