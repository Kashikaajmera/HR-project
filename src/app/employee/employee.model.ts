export class EmployeeModel{
    employeeId!: String;
  employeeImage!: String;
  employeePosition!: String;
  constructor(id:String,image:String,position:String) {
    this.employeeId=id;
    this.employeeImage=image;
    this.employeePosition=position;
   }
}