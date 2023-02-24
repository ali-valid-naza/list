import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output, SimpleChanges
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnChanges{
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.cdr.detach()
  }

  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() products: Product[];
  @Input() displayCode: boolean;
  @Input() selectedProduct: Product;
  @Output() displayCodeChanged = new EventEmitter<void>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() productWasSelected = new EventEmitter<Product>();

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }

}
