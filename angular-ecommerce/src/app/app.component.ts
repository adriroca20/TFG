import { Component } from '@angular/core';
import {SearchBar, PreviewCart, imageGallery, payment,Product } from './interfaces/Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products:Array<Product> = []

  datosProduct:Product={
    class:"",
    productName: "CAMISETA NIKE",
    price: "100€",
    image:"../../../assets/imagen-producto.png",
    link: ""
  }
  dataSearchBar:SearchBar={
    class: "",
    categories: ["zapatillas", "sudaderas", "pantalones", "camisas"],
    id: 0
  }
  dataPayment:payment={
    amount:10,
    price:"20€",
    class:"",
    link:"https://twitter.com"
  }

  product:Product= {
    amount: 3,
    image: "../../../assets/imagen-producto.png",
    link: "https://twitter.com",
    price: "30€",
    productName: ''
  }

  dataImages:Array<string>=[];
  imageTest1:string="../../../assets/imagen-producto.png"
  imageTest2:string="../../../assets/imagen-producto2.jpg"
  imageTest3:string="../../../assets/imagen-producto3.jpg"

  ngOnInit(){
    this.products.push(this.product)
    this.products.push(this.product)
    this.products.push(this.product)
    this.products.push(this.product)
    this.products.push(this.product)

    this.dataImages.push(this.imageTest1)
    this.dataImages.push(this.imageTest2)
    this.dataImages.push(this.imageTest3)
    this.dataImages.push(this.imageTest3)

  }
  
  dataPreviewCart:PreviewCart={
    class:"sm",
    link:"",
    total:"60€",
    products:this.products
  }
  
   dataImageGallery:imageGallery={
    class:"",
    images:this.dataImages
   }
   getDataProduct(event:any){
    console.log(event)
   }
   getDataPreview(event:any){
    console.log(event)
   }
   getDataSearch(event:any){
    console.log(event)
   }
   getDataShopping(event:any){
    console.log(event)
   }
}
