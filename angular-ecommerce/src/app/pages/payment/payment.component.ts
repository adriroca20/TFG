import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/Interfaces';
import { Payment } from 'dist/ng-ecommerce/lib/interfaces/Interfaces';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent{

  constructor(private cartService: CartService){}
  get dataCart(){
    let data:Cart={
      class:"",
      products:[]
    }
    data.products= this.cartService.cartProducts
    return data
  }
  get dataPayment(){
    let data:Payment={
      link: '',
      amount:  this.cartService.numberOfProducts,
      price: this.cartService.totalPrice
    }
    return data;
  }
}
