import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  apiRoot = 'https://coinvault-api.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/categories`;
      this.http.get<Category[]>(apiURL)
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

  getCategoryById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/categories/${id}`;
      this.http.get<Category>(apiURL)
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

  createCategory(newCategory: Category): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log('Token');
      console.log(localStorage.getItem('token'));
      const apiURL = `${this.apiRoot}/categories`;
      this.http.post(apiURL, newCategory, {
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
