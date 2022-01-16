import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberWithSeparatorPipe } from './pipes/number-with-separator.pipe';
import { PriceValueComponent } from './price-value/price-value.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

const nzModules = [NzTagModule];

/** Load icons **/
import { IconDefinition } from '@ant-design/icons-angular';
import {
  UpOutline,
  RightOutline,
  DownOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [UpOutline, RightOutline, DownOutline];

@NgModule({
  declarations: [
    NumberWithSeparatorPipe,
    PriceValueComponent,
    LineChartComponent,
  ],
  exports: [NumberWithSeparatorPipe, PriceValueComponent, LineChartComponent],
  imports: [CommonModule, ...nzModules, NzIconModule.forChild(icons)],
})
export class SharedModule {}
