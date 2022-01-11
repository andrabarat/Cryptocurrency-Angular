import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CoinDetailsComponent } from './coin-details/coin-details.component';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {
  symbol!: string | null;
  @ViewChild(CoinDetailsComponent) child: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.symbol = params.get('coin');
      if (!this.symbol) {
        this.router.navigate(['/home']);
      }
    });
  }

  setCoinDetails() {
    this.child.getCoins(this.symbol);
  }
}
