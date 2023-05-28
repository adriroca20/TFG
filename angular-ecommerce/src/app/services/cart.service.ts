import { Injectable } from "@angular/core";
import { PreviewCart, Product } from "../interfaces/Interfaces";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
    providedIn:"root"
})

export class CartService{
    private _dataProductCart:PreviewCart={
        class: "hola",
        products: [],
        link: "payment",
        total: ""
    }
    private _products:Product[]=[]

    constructor(private sanitizer:DomSanitizer){
        if(!localStorage.getItem("productData")){return}
        if(!localStorage.getItem("cartProducts")){return}
        this._dataProductCart=JSON.parse(localStorage.getItem("productData")!);
        this._products=JSON.parse(localStorage.getItem("cartProducts")!);
    }

    get dataProductCart(){
        const data:PreviewCart = this._dataProductCart
        return data
    }
    get cartProducts(){
        return this. _products;
    }
    get totalPrice(){
        let price=0
        this._dataProductCart.products.forEach((p)=>{
            price += +p.price * (p.amount || 0)
        })
        return price.toFixed(2)
    }
    get numberOfProducts(){
        let number=0;
        this._dataProductCart.products.forEach((p)=>{
            number+=(p.amount || 0)
        })
        return number;
    }
    addProduct(product:Product){
        let productPreview:Product={
            image: product.image,
            link: product.link,
            price: product.price,
            amount: 1,
            productName: ""
        }
        let aux:number[] = this._dataProductCart.products.reduce((arr:number[], e, i)=>{
            if (e.link == product.link) arr.push(i);
            return arr;
        },[])
        if(aux.length>0){
            let indiceProducto = aux[0]
            const prod= this._dataProductCart.products[indiceProducto]
            const prodCart =  this._products[indiceProducto]
            console.log(this._products)
            console.log(indiceProducto)
            if(prod.amount ){
                prod.amount+=1;
                prodCart.amount= prod.amount
            }
        }
        else{
            this._dataProductCart.products.push(productPreview);
            this._products.push(product)
        }
        this._dataProductCart.total=this.totalPrice.toString()
        localStorage.setItem("productData", JSON.stringify(this._dataProductCart));
        localStorage.setItem("cartProducts", JSON.stringify(this._products));
    }
    setDataProductCart(data:PreviewCart){
        console.log(data)
        this._products=data.products;
        this._dataProductCart=data;
        this._dataProductCart.total=this.totalPrice.toString()
        localStorage.setItem("productData", JSON.stringify(this._dataProductCart));
        localStorage.setItem("cartProducts", JSON.stringify(this._products));
    }
    sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}