import { Component } from '@angular/core';
import { ProductCard, productCart } from 'src/app/interfaces/Interfaces';
import { productsService } from 'src/app/services/api-products';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  productCards:Array<ProductCard>=[]

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
      let prod:ProductCard={
        class:"",
        name: product.title,
        price: product.price,
        image: product.image,
        link: url
      }
      this.productCards.push(prod)
    });
  }
  getDataProduct(event:productCart){
    console.log(event)
    this.cartService.addProduct(event)
   }
   sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
