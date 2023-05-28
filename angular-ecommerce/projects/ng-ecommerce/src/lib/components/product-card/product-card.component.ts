import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../interfaces/Interfaces';

@Component({
  selector: 'ecom-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  setData!:Product;
  @Output()
  getData = new EventEmitter<Product>();

  emitData(){
    this.getData.emit(this.setData);
  }

}
