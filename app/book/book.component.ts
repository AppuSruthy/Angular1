import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  Id:Number;
  Title:String;
  Author:String;
  Genere:String;
  Image:String;

  constructor() { }

  ngOnInit() {
    this.Id=1;
    this.Title="Emma";
    this.Author="Jane Austin";
    this.Genere="Fantasy";

  }

}
