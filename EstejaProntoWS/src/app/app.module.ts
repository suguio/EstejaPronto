import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadProductsComponent } from './products/read-products/read-products.component';
import { CreateProductsComponent } from './products/create-products/create-products.component';
import { UpdateProductsComponent } from './products/update-products/update-products.component';
import { DeleteProductsComponent } from './products/delete-products/delete-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent,
    CreateProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
