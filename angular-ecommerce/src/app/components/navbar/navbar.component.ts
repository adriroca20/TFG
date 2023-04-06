import { Component } from '@angular/core';
import { PreviewCart } from 'src/app/interfaces/Interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cartService: CartService){}
  dataPreviewCart:PreviewCart={
    class:"",
    link:"",
    total:"60€",
    products:[]
  }
  cartOpen:boolean=false;
  openCart(){
    this.cartOpen=!this.cartOpen;
    console.log(this.cartService.getProductCartData());
  }
  ngOnInit():void{
    this.dataPreviewCart.products = this.cartService.getProductCartData().products;
  }
}
