import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PreviewCartComponent } from './components/preview-cart/preview-cart.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgStyle, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ImageGalleryComponent,
    PaymentComponent,
    ProductCardComponent,
    PreviewCartComponent,
    SearchBarComponent,
    ShoppingCartComponent
  ],
  imports: [
    NgStyle,
    NgClass,
    BrowserModule,
    RouterModule
  ],
  exports: [
    ImageGalleryComponent,
    PaymentComponent,
    ProductCardComponent,
    PreviewCartComponent,
    SearchBarComponent,
    ShoppingCartComponent
  ]
})
export class NgEcommerceModule { }
