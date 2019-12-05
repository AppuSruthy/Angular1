import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 Name:String;
 Age:number;
 Dob:String;
 Email:String;

employee;

  constructor() { }

  ngOnInit() {
   this.employee=[{}]

  }
  add(){
    this.employee.push({name:this.Name,age:this.Age,dob:this.Dob,email:this.Email});
        }
}
