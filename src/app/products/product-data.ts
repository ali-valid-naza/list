
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
    {
      id: 1,
      productName: 'Product 1',
      productCode: 'CODE-0011',
      description: 'description',
    },
    {
      id: 2,
      productName: 'Product 2',
      productCode: 'CODE-0023',
      description: 'description',
    },
    {
      id: 5,
      productName: 'Product 3',
      productCode: 'CODE-0048',
      description: 'description',
    },
    {
      id: 8,
      productName: 'Product 4',
      productCode: 'CODE-0022',
      description: 'description',
    },
    {
      id: 10,
      productName: 'Product 5',
      productCode: 'CODE-0042',
      description: 'description',
    }
    ];
    return { products };
  }
}
