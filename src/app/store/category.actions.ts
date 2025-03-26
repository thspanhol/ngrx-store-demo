import { createAction, props } from '@ngrx/store';
import { Category } from '../models/category.model';

// Ação para carregar categorias
export const loadCategories = createAction('[Category] Load Categories');

// Ação para indicar sucesso ao carregar categorias
export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: Category[] }>()
);

// Ação para indicar falha ao carregar categorias
export const loadCategoriesFailure = createAction(
  '[Category] Load Categories Failure',
  props<{ error: string }>()
);
