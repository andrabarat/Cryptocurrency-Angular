import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoinRoutingModule } from './coin-routing.module';
import { CoinComponent } from './coin.component';
import { ComparableIconComponent } from './comparable-icon/comparable-icon.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinService } from './coin.service';

/** Load ng modules **/
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

/** Load icons **/
import { IconDefinition } from '@ant-design/icons-angular';
import {
  ArrowUpOutline,
  ArrowRightOutline,
  ArrowDownOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  ArrowUpOutline,
  ArrowRightOutline,
  ArrowDownOutline,
];

const nzModules = [
  NzSkeletonModule,
  NzResultModule,
  NzTableModule,
  NzDividerModule,
  NzGridModule,
  NzTabsModule,
];
@NgModule({
  declarations: [CoinComponent, ComparableIconComponent, CoinDetailsComponent],
  imports: [
    CommonModule,
    CoinRoutingModule,
    SharedModule,
    ...nzModules,
    NzIconModule.forChild(icons),
  ],
  providers: [CoinService],
})
export class CoinModule {}
