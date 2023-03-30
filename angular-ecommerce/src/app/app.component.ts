import { Component } from '@angular/core';
import { ProductCard, SearchBar, PreviewCart, productCart } from './interfaces/Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products:Array<productCart> = []

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

  product:productCart= {
    amount:3,
    class:"",
    image:"../../../assets/imagen-producto.png",
    link:"https://twitter.com",
    price:"30€",
    productName:"Camiseta de manga corta facil de vestir color rojo y marron"
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
  datosRecibidos!:any;
  showData(){
    console.log(this.datosRecibidos)
  }
}
