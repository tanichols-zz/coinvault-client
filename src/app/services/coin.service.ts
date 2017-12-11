import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Coin } from '../models/coin';

@Injectable()
export class CoinService {
  apiRoot = 'https://coinvault-api.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  // getCategories(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const apiURL = `${this.apiRoot}/categories`;
  //     this.http.get<Category[]>(apiURL)
  //       .toPromise()
  //       .then(
  //         res => {
  //           resolve(res);
  //         },
  //         err => {
  //           reject(err);
  //         }
  //       );
  //   });
  // }

  getCoinById(coinId: number, catId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/categories/${catId}/coins/${coinId}`;
      this.http.get<Coin>(apiURL)
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  createCoin(newCoin: Coin, catId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/categories/${catId}/coins`;
      this.http.post(apiURL, newCoin, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  editCoin(coin: Coin): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/coins/${coin.id}`;
      this.http.put(apiURL, coin, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  deletecoin(coin: Coin): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/coins/${coin.id}`;
      this.http.delete(apiURL, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
