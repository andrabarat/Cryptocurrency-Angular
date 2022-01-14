import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoinCardComponent } from './coin-card/coin-card.component';
import { CoinsContainerComponent } from './coins-container/coins-container.component';
import { HomeService } from './home.service';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTagModule } from 'ng-zorro-antd/tag';

const nzModules = [
  NzGridModule,
  NzCardModule,
  NzSkeletonModule,
  NzResultModule,
  NzTagModule,
];

@NgModule({
  declarations: [HomeComponent, CoinCardComponent, CoinsContainerComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ...nzModules],
  providers: [HomeService],
})
export class HomeModule {}
