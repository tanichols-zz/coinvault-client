import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[cv-coin]',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  @Input()
  coin;

  constructor() { }

  ngOnInit() {
  }

}
