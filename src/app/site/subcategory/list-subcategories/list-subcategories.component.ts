import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../../../core/services/subcategory.service';
import { Subcategory } from '../../../core/interfaces/subcategory';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-subcategories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-subcategories.component.html',
  styleUrl: './list-subcategories.component.css'
})
export class ListSubcategoriesComponent implements OnInit {
  subCategories: Subcategory[] = [];
  constructor(private _SubcategoryService: SubcategoryService) { }
  ngOnInit(): void {
    this._SubcategoryService.getSubCategories().subscribe((res: any) => {
      this.subCategories = res.data;
      console.log(this.subCategories);

    })
  }

}
