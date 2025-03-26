import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

// Definição das ações
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Product] Remove Product',
  props<{ id: number }>()
);
