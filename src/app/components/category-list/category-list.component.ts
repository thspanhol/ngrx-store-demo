import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryState } from '../../store/category.reducer';
import { loadCategories } from '../../store/category.actions';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private store: Store<{ categoryState: CategoryState }>) {
    this.categories$ = store.select(state => state.categoryState.categories);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
  }
}
