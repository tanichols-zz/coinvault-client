import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {

  private coins = [
    {
      "id": 1,
      "name": "Delaware State Quarter",
      "year": 1999,
      "image_link": "https://www.usmint.gov/wordpress/wp-content/uploads/2016/06/1999-50-state-quarters-coin-delaware-proof-reverse.jpg",
      "description": "The Delaware coin is the first coin released in the 50 State® Quarter Program and was released on January 4, 1999. Delaware, admitted into the Union on December 7, 1787, themed the coin, The First State. This coin celebrates Caesar Rodney's historic horseback ride in 1776.",
      "createdAt": "2017-11-19T04:12:29.829Z",
      "updatedAt": "2017-11-19T04:12:29.829Z",
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Pensylvania State Quarter",
      "year": 1999,
      "image_link": "https://www.usmint.gov/wordpress/wp-content/uploads/2016/06/1999-50-state-quarters-coin-pennsylvania-proof-reverse.jpg",
      "description": "Released on March 8, 1999, this is the second coin released in the 50 State® Quarter Program and the second released in 1999. Pennsylvania, admitted into the Union on December 12, 1787, features the statue, Commonwealth, with an outline of the state and their motto, Virture, Liberty, Independence, and a keystone.",
      "createdAt": "2017-11-19T04:13:14.988Z",
      "updatedAt": "2017-11-19T04:13:14.988Z",
      "category_id": 1
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
