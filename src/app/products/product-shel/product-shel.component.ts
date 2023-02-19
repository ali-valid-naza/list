import { Component } from '@angular/core';

@Component({
  selector: 'app-product-shel',
  templateUrl: './product-shel.component.html',
  styleUrls: ['./product-shel.component.scss']
})
export class ProductShelComponent {

  deleteProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.deleteProduct({ productId: product.id }));
  }

  clearProduct(): void {
    this.store.dispatch(ProductPageActions.clearCurrentProduct());
  }
  saveProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.createProduct({ product }));
  }

  updateProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.updateProduct({ product }));
  }
}
