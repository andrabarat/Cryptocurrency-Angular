import { Component } from '@angular/core';
import { CoinService } from '../coin.service';
import { Coin } from 'src/app/shared/models';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
})
export class CoinDetailsComponent {
  constructor(private coinService: CoinService) {}

  coins!: Coin[];
  areFetched = false;
  isError = false;

  getCoins(symbol: string): void {
    this.coinService.getCoins(symbol).subscribe(
      (data: Coin[]) => {
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
