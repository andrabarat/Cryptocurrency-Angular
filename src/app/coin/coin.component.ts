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
  coin!: Coin;
  isFetched = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const coinId = params.get('coin');
      if (coinId) {
        this.getCoin(coinId);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  getCoin(coinId: string): void {
    this.coinService.getCoin(coinId).subscribe((data) => {
      this.coin = data;
      this.isFetched = true;
    });
  }
}
