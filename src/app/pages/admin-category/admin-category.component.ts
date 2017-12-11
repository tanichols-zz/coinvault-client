import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../models/category';
import { Coin } from '../../models/coin';
import { CategoryService } from '../../services/category.service';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'cv-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  category: Category;
  newCoin: Coin;
  loading = false;
  editSuccess = false;
  editFailed = false;
  deleteSuccess = false;
  deleteFailed = false;
  submitSuccess = false;
  submitFailed = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService,
    private coinService: CoinService
  ) {
    this.newCoin = new Coin();
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

  onNewCoinSubmit() {
    console.log(this.newCoin);
    this.coinService.createCoin(this.newCoin, this.category.id).then(
      res => {
        this.newCoin = new Coin();
        this.ngOnInit();
        this.submitSuccess = true;
      },
      err => {
        console.log(err);
        this.submitFailed = true;
      }
    );
  }
}
