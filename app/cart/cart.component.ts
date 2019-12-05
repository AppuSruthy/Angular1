import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products;
pname:String;
show:boolean;
  constructor() { }

  ngOnInit() {
    this.products=["printer","scanner","speaker"]
  }
Add(){
  this.products.push(this.pname);
}

del(i:Number){
  this.products.splice(i,1);
}
Toggle(){
this.show=!this.show;
}

}
