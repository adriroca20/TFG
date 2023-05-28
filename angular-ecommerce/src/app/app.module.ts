import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgEcommerceModule } from 'ngEcommerce';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InDevelopmentComponent } from './components/in-development/in-development.component';
import { PaymentComponent } from './pages/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ShopComponent,
    ProductInfoComponent,
    NavbarComponent,
    InDevelopmentComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgEcommerceModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
