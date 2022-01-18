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

  lineChartDataSet: any;
  doughnutChartDataSet: any;

  ngOnInit(): void {
    this.coin = this.coins[0];
    this.fillDatasets();
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

  private fillDatasets() {
    this.lineChartDataSet = { labels: [], data: [] };
    this.doughnutChartDataSet = new Map<string, number>();

    this.orderedCoins.forEach((coin: Coin) => {
      this.fillLineChartDataSet(coin);
      this.fillDoughnutChartDataSet(coin);
    });
  }

  private fillLineChartDataSet(coin: Coin): void {
    this.lineChartDataSet.labels.push(moment(coin.date).format('DD-MM-yyyy'));
    this.lineChartDataSet.data.push(coin.high);
  }

  private fillDoughnutChartDataSet(coin: Coin): void {
    const year = moment(coin.date).year().toString();
    let value = parseFloat(
      this.doughnutChartDataSet.get(year) as unknown as string
    );
    if (value) {
      const newValue = value + parseFloat(coin.volume as unknown as string);
      this.doughnutChartDataSet.set(year, newValue);
    } else {
      this.doughnutChartDataSet.set(year, coin.volume);
    }
  }

  private generateLineChart(): void {
    this.lineChartLabels = this.lineChartDataSet.labels;
    this.lineChartTitle = "Distributions of coin's value per day";
    this.lineChartLabel = '$ per day';
    this.lineChartData = this.lineChartDataSet.data;
    this.lineChartBackgroundColor = ColorsTransparent.Green;
    this.lineChartBorderColor = Colors.Green;
  }

  private generateDoughnutChart(): void {
    this.doughnutChartLabels = Array.from(this.doughnutChartDataSet.keys());
    this.doughnutChartData = Array.from(this.doughnutChartDataSet.values());
    this.doughnutChartBackgroundColors = this.getDoughnutChartBackgroundColors(
      this.doughnutChartLabels.length
    );
    this.doughnutChartTitle = "Distributions of coin's volume per year";
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
