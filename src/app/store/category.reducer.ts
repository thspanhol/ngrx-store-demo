import { createReducer, on } from '@ngrx/store';
import { loadCategoriesSuccess } from './category.actions';
import { Category } from '../models/category.model';

// Estado inicial
export interface CategoryState {
  categories: Category[];
}

export const initialState: CategoryState = {
  categories: [],
};

// Criando o reducer
export const categoryReducer = createReducer(
  initialState,
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories
  }))
);
