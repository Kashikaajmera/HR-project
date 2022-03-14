import { Component, OnInit } from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { EmployeeModel } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ConfirmationService]
})
export class EmployeeComponent implements OnInit {
 public employees!: EmployeeModel[];

 msgs: Message[] = [];

 position!: string;
 basicData: any;

    basicOptions: any;

 
  constructor(private em:EmployeeService,private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig,private messageService: MessageService,) { }

  ngOnInit(): void {
    this.employees=this.em.getEmployees();
    this.primengConfig.ripple = true;
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };
this.basicOptions={
  title: {
    display: true,
    text: 'My Title',
    fontSize: 16
},
legend: {
    position: 'bottom'
}
}
  }
// delete(){
//   this.confirmationService.confirm({
//     message: 'Are you sure that you want to proceed?',
//     header: 'Confirmation',
//     icon: 'pi pi-exclamation-triangle',
//     accept: () => {
//         this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
//     },
//     reject: () => {
//         this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
//     }
// });
// }
edit(event: Event){
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: "Are you sure that you want to proceed?",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      this.messageService.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted"
      });
    },
    reject: () => {
      this.messageService.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected"
      });
    }
  });
 
}

}



