import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comparable-icon',
  templateUrl: './comparable-icon.component.html',
  styleUrls: ['./comparable-icon.component.scss'],
})
export class ComparableIconComponent {
  @Input() value!: number;
  @Input() previousValue!: number;

  get valueAsNumber(): number {
    return parseFloat(this.value as unknown as string);
  }

  get previousValueAsNumber(): number {
    return parseFloat(this.previousValue as unknown as string);
  }
}
