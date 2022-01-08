import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Coin } from '../shared/models';
import { CoinService } from './coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {
  symbol!: string | null;
  coins!: Coin[];
  areFetched = false;
  isError = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.symbol = params.get('coin');
      if (this.symbol) {
        this.getCoins(this.symbol);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

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

  formatNumberSeparator(text: number): string {
    const numberArray = text.toString().split('.');
    const beforeComma = numberArray[0].replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    );
    return beforeComma + '.' + numberArray[1];
  }
}
