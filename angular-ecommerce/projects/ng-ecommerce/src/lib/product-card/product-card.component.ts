import { Component, Input, OnInit} from '@angular/core';
import { dataCard } from '../interfaces/product-card';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  data!:any;
  @Input()
  nombre!:string;
  OnInit(){
  }
  constructor(){
    // this.name= "camiseta";
    // this.price="27"
  }
  
}
