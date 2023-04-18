import { Component, OnInit } from '@angular/core';
import { PreviewCart } from 'src/app/interfaces/Interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private cartService: CartService){}
  get dataPreviewCart(){
    return this.cartService.dataProductCart;
  }
  cartOpen:boolean=false;
  openCart(){
    this.cartOpen=!this.cartOpen;
  }
  changeProduct(event:PreviewCart){
    this.cartService.setDataProductCart(event)
  }
}
