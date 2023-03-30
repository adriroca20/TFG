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
  dataEmitter = new EventEmitter<any>();
  cantidad:Array<number>= []
  ngOnInit(){
     this.setData.products.forEach(product => {
        this.cantidad.push(product.amount)
     });
  }
  emitData(){
    this.dataEmitter.emit(this.setData);
  }
  masCantidad(i:number){
    this.cantidad[i]+=1;
    console.log(this.cantidad)

  }
  menosCantidad(i:number){
    if(this.cantidad[i]>0){
      this.cantidad[i]-=1;
    }
  }
}
