import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Coin } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  coins: Coin[] = [];
  areFetched = false;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getCoins().subscribe((data) => {
      this.coins = data;
      this.areFetched = true;
    });
  }
}
