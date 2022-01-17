import { Component, Input, OnInit } from '@angular/core';
import {
  Coin,
  Colors,
  ColorsTransparent,
  ComparableCoins,
} from 'src/app/shared/models';
import * as moment from 'moment';

@Component({
  selector: 'app-coin-stats',
  templateUrl: './coin-stats.component.html',
  styleUrls: ['./coin-stats.component.scss'],
})
export class CoinStatsComponent implements OnInit {
  @Input() coins!: Coin[];

  get orderedCoins(): Coin[] {
    const orderedCoins = [...this.coins];
    orderedCoins.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return orderedCoins;
  }

  coin!: Coin;

  lineChartLabels!: string[];
  lineChartTitle!: string;
  lineChartLabel!: string;
  lineChartData!: number[];
  lineChartBackgroundColor!: string;
  lineChartBorderColor!: string;

  doughnutChartLabels!: string[];
  doughnutChartTitle!: string;
  doughnutChartData!: number[];
  doughnutChartBackgroundColors!: string[];

  ngOnInit(): void {
    this.coin = this.coins[0];
    this.generateLineChart();
    this.generateDoughnutChart();
  }

  getCoinValue(): number {
    return (
      (parseFloat(this.coin.high as unknown as string) +
        parseFloat(this.coin.low as unknown as string)) /
      2
    );
  }

  private generateLineChart(): void {
    this.lineChartLabels = this.getLineChartLabels();
    this.lineChartTitle = "Distributions of coin's value per day";
    this.lineChartLabel = '$ per day';
    this.lineChartData = this.getLineChartData();
    this.lineChartBackgroundColor = ColorsTransparent.Green;
    this.lineChartBorderColor = Colors.Green;
  }

  private getLineChartLabels(): string[] {
    let labels: string[] = [];
    this.orderedCoins.forEach((coin: Coin) => {
      labels.push(moment(coin.date).format('DD-MM-yyyy'));
    });
    return labels;
  }

  private getLineChartData(): number[] {
    let data: number[] = [];
    this.orderedCoins.forEach((coin: Coin) => {
      data.push(coin.high);
    });
    return data;
  }

  private generateDoughnutChart(): void {
    this.setDoughnutChartDatasets();
    this.doughnutChartTitle = "Distributions of coin's volume per year";
  }

  private setDoughnutChartDatasets(): void {
    var dataset = this.getDoughnutChartDatasets();
    this.doughnutChartLabels = Array.from(dataset.keys());
    this.doughnutChartData = Array.from(dataset.values());
    this.doughnutChartBackgroundColors = this.getDoughnutChartBackgroundColors(
      this.doughnutChartLabels.length
    );
  }

  private getDoughnutChartDatasets(): Map<string, number> {
    let dataset = new Map<string, number>();
    this.orderedCoins.forEach((coin: Coin) => {
      const year = moment(coin.date).year().toString();
      let value = parseFloat(dataset.get(year) as unknown as string);
      if (value) {
        const newValue = value + parseFloat(coin.volume as unknown as string);
        dataset.set(year, newValue);
      } else {
        dataset.set(year, coin.volume);
      }
    });
    return dataset;
  }

  private getDoughnutChartBackgroundColors(size: number): string[] {
    let backgroundColors: string[] = [];
    for (let index = 0; index < size; index++) {
      backgroundColors.push(this.getRandomEnumValue(Colors));
    }
    return backgroundColors;
  }

  private getRandomEnumValue(enumeration: any): string {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  }
}
