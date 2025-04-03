import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://crud-node-a7h4.onrender.com/usuarios';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  ///////////////////

  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createCategory(category: Category): Observable<void> {
    return this.http.post<void>(this.apiUrl, category);
  }

  updateCategory(category: Category): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${category.id}`, category);
  }
  
}
