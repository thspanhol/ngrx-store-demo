import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct } from './product.actions';
import { Product } from '../models/product.model';

// Estado inicial
export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

// Criando o reducer
export const productReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(removeProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter(product => product.id !== id),
  }))
);
