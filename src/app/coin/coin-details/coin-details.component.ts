import { Component, Input } from '@angular/core';
import { Coin } from 'src/app/shared/models';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
})
export class CoinDetailsComponent {
  @Input() coins!: Coin[];
}
