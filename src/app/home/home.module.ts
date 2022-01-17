import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoinCardComponent } from './coin-card/coin-card.component';
import { CoinsContainerComponent } from './coins-container/coins-container.component';
import { HomeService } from './home.service';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const nzModules = [
  NzGridModule,
  NzSkeletonModule,
  NzResultModule,
  NzTagModule,
  NzDividerModule
];

@NgModule({
  declarations: [HomeComponent, CoinCardComponent, CoinsContainerComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ...nzModules],
  providers: [HomeService],
})
export class HomeModule {}
