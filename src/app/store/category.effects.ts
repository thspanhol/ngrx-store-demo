import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../services/category.service';
import { loadCategories, loadCategoriesSuccess, loadCategoriesFailure } from './category.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CategoryEffects {
  constructor(private actions$: Actions, private categoryService: CategoryService) {}

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
}
