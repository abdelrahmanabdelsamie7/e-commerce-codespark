import { Routes } from '@angular/router';
import { ShowSubcategoryComponent } from './site/subcategory/show-subcategory/show-subcategory.component';
import { ListCategoriesComponent } from './site/category/list-categories/list-categories.component';
import { ListSubcategoriesComponent } from './site/subcategory/list-subcategories/list-subcategories.component';

export const routes: Routes = [
  { path: '', component: ListSubcategoriesComponent }
  , { path: 'show-subcategory/:id', component: ShowSubcategoryComponent }
];
