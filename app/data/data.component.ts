import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
Name:String ="Ram";
Age:Number;
Email:String="jfg@gmail.com";
Address;
Hobbies:String[]
Project;
Title:String;
Department:String;
Status:String;
  constructor() { }

  ngOnInit() {
     this.Name ="Jhon Smith";
    this.Age=30;
    this.Address={Hname:"Sra56",Street:"Line1",location:"Tsr",pcode:789}
    this.Hobbies=["Reading","painting","Dancing"]
    this.Project=[
      {Title:"P1",Dept:"IT",Status:"Live"},
      {Title:"P2",Dept:"Finance",Status:"Live"},
      {Title:"P3",Dept:"Mechanical",Status:"Live"},
      {Title:"P4",Dept:"Civil",Status:"Live"},
      {Title:"P5",Dept:"IT",Status:"Live"}
    ]
  }

  del(i,Number)
  {
    this.Project.splice(i,1);
  }
  Add()
  {
    this.Project.push({Title:this.Title,Dept:this.Department,Status:this.Status});
  }
  
}
