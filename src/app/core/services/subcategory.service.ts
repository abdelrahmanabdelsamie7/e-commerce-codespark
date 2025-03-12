import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from '../interfaces/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private _HttpClient: HttpClient) { }
  getSubCategories(): Observable<Subcategory[]> {
    return this._HttpClient.get<Subcategory[]>(`https://ecommerce.routemisr.com/api/v1/subcategories`);
  }
  getSubCategorie(id: string): Observable<Subcategory[]> {
    return this._HttpClient.get<Subcategory[]>(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`);
  }
}
