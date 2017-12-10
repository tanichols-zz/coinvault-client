import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'cv-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  loading = false;

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
}
