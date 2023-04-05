import { Component, Input, Output, EventEmitter,OnInit} from '@angular/core';
import { PreviewCart } from 'src/app/interfaces/Interfaces';
@Component({
  selector: 'app-preview-cart',
  templateUrl: './preview-cart.component.html',
  styleUrls: ['./preview-cart.component.css']
})
export class PreviewCartComponent {
  @Input()
  setData!:PreviewCart;
  @Output()
  getData = new EventEmitter<any>();
  cantidad:Array<number>= []
  dataToEmit!:PreviewCart;
  ngOnInit(){
     this.setData.products.forEach(product => {
        this.cantidad.push(product.amount)
     });
     this.dataToEmit={
      class:this.setData.class,
      link:this.setData.link,
      total:this.setData.total,
      products:this.setData.products
    }
  }
  sendData(){
    this.dataToEmit.products= this.setData.products
    this.dataToEmit.products.forEach((product,i) => {
      product.amount=this.cantidad[i]
   });
    this.getData.emit(this.dataToEmit);
  }
  masCantidad(i:number){
    this.cantidad[i]+=1;
    this.dataToEmit.products[i].amount=this.cantidad[i];
    this.getData.emit(this.dataToEmit);
  }
  menosCantidad(i:number){
    if(this.cantidad[i]>1){
      this.cantidad[i]-=1;
      this.dataToEmit.products[i].amount=this.cantidad[i];
      this.getData.emit(this.dataToEmit);
    }
  }
  eliminarProducto(i:number){
    this.setData.products.splice(i,1)
    this.dataToEmit.products=this.setData.products
    this.getData.emit(this.dataToEmit);
  }
}
