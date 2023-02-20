import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductShelComponent } from './products/product-shel/product-shel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './products/state/product.reducer';
import { HttpClientModule } from '@angular/common/http';
import { ProductEffects } from './products/state/product.effects';
import { ProductData } from './products/product-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductShelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('products', productReducer),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: '',
      maxAge: 25,
      logOnly: false
    }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: GetProductsInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
