import { Component } from '@angular/core';
import { ProductCard, SearchBar, PreviewCart, productCart, payment,PreviewProductCart } from './interfaces/Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products:Array<PreviewProductCart> = []

  datosProduct:ProductCard={
    class:"md-product-card",
    name: "CAMISETA NIKE",
    price: "100€",
    image:"../../../assets/imagen-producto.png",
    link: ""
  }
  dataSearchBar:SearchBar={
    class: "",
    categories:["zapatillas","sudaderas","pantalones","camisas"]
  }
  dataPayment:payment={
    amount:10,
    price:"20€",
    class:"",
    link:"https://twitter.com"
  }

  product:PreviewProductCart= {
    amount:3,
    image:"../../../assets/imagen-producto.png",
    link:"https://twitter.com",
    price:"30€"
  }

  ngOnInit(){
    this.products.push(this.product)
    this.products.push(this.product)
    this.products.push(this.product)
    this.products.push(this.product)
    this.products.push(this.product)
  }
  
  dataPreviewCart:PreviewCart={
    class:"",
    products:this.products
   }
}
