import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/Interfaces';
import { productsService } from 'src/app/services/api-products';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  productCards:Array<Product>=[]

  constructor(private productsService:productsService, private sanitizer:DomSanitizer,  private cartService: CartService){
  }

  ngOnInit(){
    this.productsService.getProducts().subscribe((products) => {
      this.parseDataProducts(products);
    });
  }

  parseDataProducts(products:any[]){
    products.forEach(product => {
      let url:string= 'product-info/' + product.id;
      // let urlSanitized:any= this.sanitize(url)
      let prod:Product={
        class:"",
        productName: product.title,
        price: product.price,
        image: product.image,
        link: url
      }
      this.productCards.push(prod)
    });
  }
  getDataProduct(event:Product){
    console.log(event)
    this.cartService.addProduct(event)
   }
   sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
