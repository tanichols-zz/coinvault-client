import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'cv-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  categories: Category[];
  loading = true;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().then(
      res => {
        this.categories = res;
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

}
