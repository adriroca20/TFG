import { Component } from '@angular/core';
import { PreviewCart } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartOpen:boolean=false;
  openCart(){
    this.cartOpen=!this.cartOpen;
  }
  dataPreviewCart:PreviewCart={
    class:"",
    link:"",
    total:"60€",
    products:[]
  }
}
