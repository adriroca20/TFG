import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

import { NgStyle } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@NgModule({
  declarations: [
    ProductCardComponent,
    ShoppingCartComponent,
  ],
  imports: [
    NgStyle
  ],
  exports: [
    ProductCardComponent
    
  ]
})
export class NgEcommerceModule { }
