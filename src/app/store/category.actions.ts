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

//////////////////////////////////////

export const deleteCategory = createAction(
  '[Category] Delete Category',
  props<{ id: string }>()
);

export const deleteCategorySuccess = createAction(
  '[Category] Delete Category Success',
  props<{ id: string }>()
);

export const deleteCategoryFailure = createAction(
  '[Category] Delete Category Failure',
  props<{ error: string }>()
);


export const createCategory = createAction(
  '[Category] Create Category',
  props<{ category: Category }>()
);

export const createCategorySuccess = createAction(
  '[Category] Create Category Success',
  props<{ category: Category }>()
);

export const createCategoryFailure = createAction(
  '[Category] Create Category Failure',
  props<{ error: string }>()
);


export const updateCategory = createAction(
  '[Category] Update Category',
  props<{ category: Category }>()
);

export const updateCategorySuccess = createAction(
  '[Category] Update Category Success',
  props<{ category: Category }>()
);

export const updateCategoryFailure = createAction(
  '[Category] Update Category Failure',
  props<{ error: string }>()
);

// action > effect utilizando a service > reducer > dispatch no ts do componente