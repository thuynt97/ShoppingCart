import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi');

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductPriceComponent,
    CartHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
