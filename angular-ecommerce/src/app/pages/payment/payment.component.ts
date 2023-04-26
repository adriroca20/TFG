import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/Interfaces';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent{
  // dataCart:Cart = {
  //   class: '',
  //   products: []
  // }
  constructor(private cartService: CartService){}
  get dataCart(){
    let data:Cart={
      class:"",
      products:[]
    }
    data.products= this.cartService.cartProducts
    return data
  }
}
