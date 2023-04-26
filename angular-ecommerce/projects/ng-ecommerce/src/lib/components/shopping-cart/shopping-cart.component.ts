import { Component, Input, Output, EventEmitter,OnInit} from '@angular/core';
import { Cart } from '../../interfaces/Interfaces';

@Component({
  selector: 'ecom-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input()
  setData!:Cart;
  @Output()
  dataEmitter = new EventEmitter<any>();
  cantidad:Array<number>= []
  dataToEmit!:Cart;
  ngOnInit(){
     this.setData.products.forEach(product => {
        this.cantidad.push(product.amount || 0)
     });
     this.dataToEmit={
      class:this.setData.class,
      products:this.setData.products
    }
  }
  sendData(){
    this.dataToEmit.products= this.setData.products
    this.dataToEmit.products.forEach((product,i) => {
      console.log(this.cantidad[i])
      product.amount=this.cantidad[i]
   });
    console.log(this.setData)
    this.dataEmitter.emit(this.setData);
  }
  masCantidad(i:number){
    this.cantidad[i]+=1;
    // console.log(this.cantidad)

  }
  menosCantidad(i:number){
    if(this.cantidad[i]>0){
      this.cantidad[i]-=1;
    }
  }
  eliminarProducto(i:number){
    this.setData.products.splice(i,1)
  }
}
