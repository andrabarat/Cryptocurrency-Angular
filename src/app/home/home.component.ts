import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ComparableCoins } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  coins: ComparableCoins[] = [];
  areFetched = false;
  isError = false;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getCoins().subscribe(
      (data: ComparableCoins[]) => {
        this.coins = data;
        this.areFetched = true;
      },
      () => {
        this.areFetched = true;
        this.isError = true;
      }
    );
  }
}
