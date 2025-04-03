import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../services/category.service';
import { loadCategories, loadCategoriesSuccess, loadCategoriesFailure, deleteCategory, deleteCategoryFailure, deleteCategorySuccess, createCategory, createCategorySuccess, createCategoryFailure, updateCategory, updateCategorySuccess, updateCategoryFailure } from './category.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CategoryEffects {

  actions$ = inject(Actions);

  constructor(private categoryService: CategoryService) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map(categories => loadCategoriesSuccess({ categories })),
          catchError(error => of(loadCategoriesFailure({ error: error.message })))
        )
      )
    )
  );

  /////////////////

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCategory),
      mergeMap(action =>
        this.categoryService.deleteCategory(action.id).pipe(
          map(() => deleteCategorySuccess({ id: action.id })),
          catchError(error => of(deleteCategoryFailure({ error: error.message })))
        )
      )
    )
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCategory),
      mergeMap(action =>        
        this.categoryService.createCategory(action.category).pipe(
          map(() => createCategorySuccess({ category: action.category })),
          catchError(error => of(createCategoryFailure({ error: error.message })))
        )
      )
    )
  );

  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCategory),
      mergeMap(action =>        
        this.categoryService.updateCategory(action.category).pipe(
          map(() => updateCategorySuccess({ category: action.category })),
          catchError(error => of(updateCategoryFailure({ error: error.message })))
        )
      )
    )
  );
}