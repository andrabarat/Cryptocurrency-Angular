import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  @Input() labels!: string[];
  @Input() title!: string;
  @Input() data!: number[];
  @Input() backgroundColors!: string[];

  constructor() {}

  ngOnInit(): void {
    this.generateChart();
  }

  generateChart() {
    new Chart('doughnut-chart', {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.backgroundColors,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: this.title,
          },
        },
      },
    });
  }
}
