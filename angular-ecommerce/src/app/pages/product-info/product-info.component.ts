import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productsService } from 'src/app/services/api-products';
import { imageGallery, Product } from 'src/app/interfaces/Interfaces';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  dataProduct:any={
    title:"",
    image:"",
  }
  galleryData:imageGallery={
    class:"",
    images:[]
  }
  constructor(private productsService:productsService,private router: Router, private route:ActivatedRoute, private cartService: CartService){

  }
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap:any)=>{
      this.loadData(paramMap.params.id)
    })
  }
  loadData(id:string){
    this.productsService.getProductWithID(id).subscribe((product:any) => {
      this.dataProduct=product;
      this.galleryData.images[0]= product.image
      this.galleryData={
        class:"",
        images:[product.image]
      }
    });
  }
  addToCart() : void{
    let dataProductToAdd: Product = {
      class: '',
      productName: this.dataProduct.title,
      image:  this.dataProduct.image,
      price:  this.dataProduct.price,
      link: this.router.url,
      amount: 1
    }
    this.cartService.addProduct(dataProductToAdd)
  }
}
