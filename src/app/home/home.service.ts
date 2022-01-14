import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ComparableCoins, Coin, Status } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCoins(): Observable<ComparableCoins[]> {
    return this.http.get(environment.apiUrl + '/coins').pipe(
      map((data) => {
        let coins = data as ComparableCoins[];
        this.fillStatus(coins);
        return coins;
      })
    );
  }

  private fillStatus(coins: ComparableCoins[]): void {
    coins.forEach((coin: ComparableCoins) => {
      coin.currentCoin.status = this.getStatus(
        coin.currentCoin,
        coin.previousCoin
      );
    });
  }

  private getStatus(currentCoin: Coin, previousCoin: Coin): Status {
    if (currentCoin.high > previousCoin.high) {
      return Status.Increased;
    }
    if (currentCoin.high == previousCoin.high) {
      return Status.Stalled;
    }
    if (currentCoin.high < previousCoin.high) {
      return Status.Decreased;
    }
    return Status.None;
  }
}
