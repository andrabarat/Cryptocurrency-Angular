import { Component, Input, OnInit } from '@angular/core';
import { Coin } from 'src/app/shared/models';

@Component({
  selector: 'app-coin-stats',
  templateUrl: './coin-stats.component.html',
  styleUrls: ['./coin-stats.component.scss'],
})
export class CoinStatsComponent {
  labels: string[] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  title: string = '# of Votes';
  data: number[] = [12, 19, 3, 5, 2, 3];
  backgroundColor: string = 'rgb(255, 99, 132)';
  borderColor: string = 'rgb(255, 99, 132)';

  @Input() coins!: Coin[];
}
