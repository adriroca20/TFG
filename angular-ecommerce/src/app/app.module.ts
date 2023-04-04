import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxImgZoomModule } from 'ngx-img-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PreviewCartComponent } from './components/preview-cart/preview-cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SearchBarComponent,
    PreviewCartComponent,
    PaymentComponent,
    ShoppingCartComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImgZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
