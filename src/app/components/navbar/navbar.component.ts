import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'cv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: Category[];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) { }

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
