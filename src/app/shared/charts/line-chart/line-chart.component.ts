import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() labels!: string[];
  @Input() title!: string;
  @Input() label!: string;
  @Input() data!: number[];
  @Input() backgroundColor!: string;
  @Input() borderColor!: string;

  constructor() {}

  ngOnInit(): void {
    this.generateChart();
  }

  generateChart() {
    new Chart('line-chart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: 2,
            pointRadius: 0,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
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
