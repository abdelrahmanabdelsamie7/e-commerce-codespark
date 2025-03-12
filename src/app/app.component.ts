import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListSubcategoriesComponent } from "./site/subcategory/list-subcategories/list-subcategories.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListSubcategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
