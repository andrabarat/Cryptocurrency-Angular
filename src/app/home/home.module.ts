import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoinCardComponent } from './coin-card/coin-card.component';
import { CoinsContainerComponent } from './coins-container/coins-container.component';
import { HomeService } from './home.service';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

const nzModules = [NzGridModule, NzCardModule, NzSkeletonModule];

@NgModule({
  declarations: [HomeComponent, CoinCardComponent, CoinsContainerComponent],
  imports: [CommonModule, HomeRoutingModule, ...nzModules],
  providers: [HomeService],
})
export class HomeModule {}
