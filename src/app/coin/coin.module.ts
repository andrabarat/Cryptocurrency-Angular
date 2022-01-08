import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinRoutingModule } from './coin-routing.module';
import { CoinComponent } from './coin.component';
import { CoinService } from './coin.service';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

const nzModules = [NzSkeletonModule];
@NgModule({
  declarations: [CoinComponent],
  imports: [CommonModule, CoinRoutingModule, ...nzModules],
  providers: [CoinService],
})
export class CoinModule {}
