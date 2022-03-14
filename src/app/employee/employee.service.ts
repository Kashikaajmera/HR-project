import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: EmployeeModel[]=[
    new EmployeeModel('1','https://icons-for-free.com/iconfiles/png/512/person-1324760545186718018.png','abc'),
    new EmployeeModel('2','https://icons-for-free.com/iconfiles/png/512/person-1324760545186718018.png','abc'),
    new EmployeeModel('3','https://icons-for-free.com/iconfiles/png/512/person-1324760545186718018.png','abc'),

  ]
  getEmployees(){
    return this.employees.slice();
  }
  constructor() {
   
   }


}
