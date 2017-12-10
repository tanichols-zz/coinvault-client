import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'cv-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  categories: Category[];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService,
    public authService: AuthService
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
