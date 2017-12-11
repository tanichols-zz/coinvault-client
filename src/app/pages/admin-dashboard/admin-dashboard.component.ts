import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'cv-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  newCategory: Category;
  categories: Category[];
  loading: boolean;

  constructor(private categoryService: CategoryService) {
    this.loading = true;
    this.newCategory = new Category();
  }

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

  onSubmit() {
    this.categoryService.createCategory(this.newCategory).then(
      res => {
        this.newCategory = new Category();
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }

}
