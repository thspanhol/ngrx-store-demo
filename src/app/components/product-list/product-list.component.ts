import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../../store/product.reducer';
import { addProduct, removeProduct } from '../../store/product.actions';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<{ productState: ProductState }>) {
    this.products$ = store.select(state => state.productState.products);
  }

  addNewProduct() {
    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: `Produto ${Math.floor(Math.random() * 100)}`,
      price: Math.random() * 100
    };
    this.store.dispatch(addProduct({ product: newProduct }));
  }

  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }
}
