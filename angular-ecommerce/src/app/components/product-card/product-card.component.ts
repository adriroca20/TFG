import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ProductCard } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  setData!:ProductCard;
  @Output()
  dataEmitter = new EventEmitter<any>();

  emitData(){
    this.dataEmitter.emit(this.setData);
  }

}
