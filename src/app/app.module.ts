import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HttpClientModule } from '@angular/common/http';

const nzModules = [NzLayoutModule, NzGridModule];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ...nzModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
