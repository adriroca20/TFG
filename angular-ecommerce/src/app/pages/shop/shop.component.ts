import { Component } from '@angular/core';
import { ProductCard } from 'src/app/interfaces/Interfaces';
import { productsService } from 'src/app/services/api-products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  productsData:Array<any>=[]
  productCards:Array<ProductCard>=[]

  constructor(private productsService:productsService){
  }

  ngOnInit(){
    this.productsService.getProducts().subscribe((products) => {
      // this.productsData = products
      // console.log(products)
      this.parseDataProducts(products);
    });
  }

  parseDataProducts(products:any[]){
    products.forEach(product => {
      let prod:ProductCard={
        class:"",
        name: product.title,
        price: product.price,
        image: product.image,
        link: 'product-info:' + product.id
      }
      this.productCards.push(prod)
    });
    console.log(this.productCards)
  }
  getDataProduct(event:any){
    console.log(event)
   }
}
