import { createReducer, on } from '@ngrx/store';
import { loadCategoriesSuccess, deleteCategorySuccess, createCategorySuccess, updateCategorySuccess } from './category.actions';
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
  })),
  //////////////////////
  on(deleteCategorySuccess, (state, { id }) => ({
    ...state,
    categories: state.categories.filter(category => category.id !== id)
  })),

  on(createCategorySuccess, (state, { category }) => ({
    ...state,
    categories: [...state.categories, category]
  })),

  on(updateCategorySuccess, (state, { category }) => ({
    ...state,
    categories: [...state.categories.filter(pre => pre.id !== category.id), category]
  }))
);
