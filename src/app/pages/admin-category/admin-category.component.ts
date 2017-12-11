import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'cv-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  category: Category;
  loading = false;
  editSuccess = false;
  editFailed = false;
  deleteSuccess = false;
  deleteFailed = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) {
    this.route.params.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('catId');
    this.categoryService.getCategoryById(id).then(
      res => {
        this.category = res;
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  onEditSubmit() {
    this.categoryService.editCategory(this.category).then(
      res => {
        this.ngOnInit();
        this.editSuccess = true;
      },
      err => {
        console.log(err);
        this.editFailed = true;
      }
    );
  }

  onDeleteSubmit() {
    this.categoryService.deleteCategory(this.category).then(
      res => {
        this.deleteSuccess = true;
        this.location.back();
      },
      err => {
        console.log(err);
        this.deleteFailed = true;
      }
    );
  }
}
