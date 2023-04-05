import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
const routes: Routes = [
  {
    path:"", 
    component:LandingComponent
  },
  {
    path:"payment", 
    component:PaymentComponent
  }
  ,
  {
    path:"shop", 
    component:ShopComponent
  }  ,
  {
    path:"product-info:id", 
    component:ProductInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
