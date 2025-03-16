import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListSubcategoriesComponent } from "./site/subcategory/list-subcategories/list-subcategories.component";
import { TestComponent } from "./test/test.component";
import { TraineeComponent } from "./trainee/trainee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListSubcategoriesComponent, TestComponent, TraineeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
