import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CoinStatsComponent } from './coin-stats/coin-stats.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinService } from './coin.service';
import { Coin } from '../shared/models';
import { Logger } from '../shared/logger/logger';

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

  logger!: Logger;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coinService: CoinService
  ) {
    this.logger = new Logger();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.symbol = params.get('coin');
      if (!this.symbol) {
        this.router.navigate(['/home']);
      } else {
        this.getCoins(this.symbol);
      }
    });
  }

  getCoins(symbol: string): void {
    this.logger.start('getCoins');
    this.coinService.getCoins(symbol).subscribe(
      (data: Coin[]) => {
        this.coins = data;
        this.areFetched = true;
        this.logger.stop();
      },
      () => {
        this.areFetched = true;
        this.isError = true;
        this.logger.stop();
      }
    );
  }
}
