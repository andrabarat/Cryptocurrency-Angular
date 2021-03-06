import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Coin } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}

  getCoins(symbol: string): Observable<Coin[]> {
    return this.http
      .get(environment.apiUrl + '/coins/' + symbol)
      .pipe(map((data) => data as Coin[]));
  }
}
