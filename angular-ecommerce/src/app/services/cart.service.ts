import { Injectable } from "@angular/core";
import { Cart, PreviewCart, PreviewProductCart, productCart } from "../interfaces/Interfaces";
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
    private _products:productCart[]=[]

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
            price += +p.price * p.amount
        })
        return price.toFixed(2)
    }

    addProduct(product:productCart){
        // console.log(this.sanitize(product.link).toString())
        
        this._products.push(product)
        let productPreview:PreviewProductCart={
            image: product.image,
            link: product.link,
            price: product.price,
            amount: 1
        }
        let aux:number[] = this._dataProductCart.products.reduce((arr:number[], e, i)=>{
            if (e.link == product.link) arr.push(i);
            return arr;
        },[])
        if(aux.length>0){
            let indiceProducto = aux[0]
            this._dataProductCart.products[indiceProducto].amount+=1
        }
        else{
            this._dataProductCart.products.push(productPreview);
        }
        this._dataProductCart.total=this.totalPrice.toString()
        localStorage.setItem("productData", JSON.stringify(this._dataProductCart));
        localStorage.setItem("cartProducts", JSON.stringify(this._products));
    }
    setDataProductCart(data:PreviewCart){
        // data.products.forEach(product=>{
        //     product.link=this.sanitizer.bypassSecurityTrustUrl(product.link).toString();
        // })
        this._dataProductCart=data;
        this._dataProductCart.total=this.totalPrice.toString()
        localStorage.setItem("productData", JSON.stringify(this._dataProductCart));
    }
    sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}