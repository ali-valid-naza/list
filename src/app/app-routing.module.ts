import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductShelComponent } from './products/product-shel/product-shel.component';

const routes: Routes = [
  { path: '', component: ProductShelComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
