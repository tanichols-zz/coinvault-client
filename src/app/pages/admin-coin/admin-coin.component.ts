import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../models/category';
import { Coin } from '../../models/coin';
import { CategoryService } from '../../services/category.service';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'cv-admin-coin',
  templateUrl: './admin-coin.component.html',
  styleUrls: ['./admin-coin.component.css']
})
export class AdminCoinComponent implements OnInit {
  coin: Coin;
  category: Category;
  loading = false;
  editSuccess = false;
  editFailed = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService,
    private coinService: CoinService
  ) {
    this.route.params.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    const catId = +this.route.snapshot.paramMap.get('catId');
    this.categoryService.getCategoryById(catId).then(
      res => {
        this.category = res;
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
    const coinId = +this.route.snapshot.paramMap.get('coinId');
    this.coinService.getCoinById(coinId, catId).then(
      res => {
        this.coin = res;
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  onEditSubmit() {
    this.coinService.editCoin(this.coin).then(
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
    this.coinService.deleteCoin(this.coin).then(
      res => {
        this.location.back();
      },
      err => {
        console.log(err);
      }
    );
  }
}
