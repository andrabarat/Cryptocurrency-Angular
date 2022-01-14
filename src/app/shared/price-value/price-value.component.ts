import { Component, Input } from '@angular/core';
import { ComparableCoins, Status } from '../models';

@Component({
  selector: 'app-price-value',
  templateUrl: './price-value.component.html',
  styleUrls: ['./price-value.component.scss'],
})
export class PriceValueComponent {
  @Input() comparableCoins!: ComparableCoins;

  status = Status;

  get value(): string {
    const number =
      this.comparableCoins.currentCoin.high /
      this.comparableCoins.previousCoin.high;
    return number.toFixed(3);
  }
}
