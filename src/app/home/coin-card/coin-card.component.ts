import { Component, Input } from '@angular/core';

import { Coin, ComparableCoins, Status } from '../../shared/models';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
})
export class CoinCardComponent {
  @Input() comparableCoins!: ComparableCoins;

  status = Status;

  get coin(): Coin {
    return this.comparableCoins.currentCoin;
  }
}
