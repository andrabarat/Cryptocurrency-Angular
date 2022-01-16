import { Component, Input, OnInit } from '@angular/core';
import { Coin } from 'src/app/shared/models';
import * as moment from 'moment';

@Component({
  selector: 'app-coin-stats',
  templateUrl: './coin-stats.component.html',
  styleUrls: ['./coin-stats.component.scss'],
})
export class CoinStatsComponent implements OnInit {
  @Input() coins!: Coin[];

  get orderedCoins(): Coin[] {
    const orderedCoins = this.coins;
    orderedCoins.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return orderedCoins;
  }

  labels!: string[];
  title!: string;
  data!: number[];
  backgroundColor!: string;
  borderColor!: string;

  ngOnInit(): void {
    this.generateLineChart();
  }

  generateLineChart(): void {
    this.labels = this.getLabels();
    this.title = '$ per day';
    this.data = this.getData();
    this.backgroundColor = 'rgba(39, 174, 96, 0.2)';
    this.borderColor = 'rgb(39, 174, 96)';
  }

  getLabels(): string[] {
    let labels: string[] = [];
    this.orderedCoins.forEach((coin: Coin) => {
      labels.push(moment(coin.date).format('DD-MM-yyyy'));
    });
    return labels;
  }

  getData(): number[] {
    let data: number[] = [];
    this.orderedCoins.forEach((coin: Coin) => {
      data.push(coin.high);
    });
    return data;
  }
}
