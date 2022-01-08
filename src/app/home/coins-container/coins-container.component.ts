import { Component, Input } from '@angular/core';
import { Coin } from '../../shared/models';

@Component({
  selector: 'app-coins-container',
  templateUrl: './coins-container.component.html',
  styleUrls: ['./coins-container.component.scss'],
})
export class CoinsContainerComponent {
  @Input() coins!: Coin[];
}
