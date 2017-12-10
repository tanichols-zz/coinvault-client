import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
