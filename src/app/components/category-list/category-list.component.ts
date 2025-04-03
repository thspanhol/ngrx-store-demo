import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryState } from '../../store/category.reducer';
import { loadCategories, deleteCategory, createCategory, updateCategory } from '../../store/category.actions';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;
  testCreate: Category = {nome: 'Test Create', email: 'testuser@gmail.com', senha: 'Senha123'}
  testUpdate: Category = {nome: 'Test Update', email: 'testuser@gmail.com', senha: 'Senha123'}

  constructor(private store: Store<{ categoryState: CategoryState }>) {
    this.categories$ = store.select(state => state.categoryState.categories);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
  }

  onDelete(id: string): void {
    this.store.dispatch(deleteCategory({ id }));
  }

  onCreate(category: Category): void {
    this.store.dispatch(createCategory({ category }));
  }

  onUpdate(category: Category, id: string): void {
    let update: Category = {...category, id}
    this.store.dispatch(updateCategory({ category: update }));
  }
}
