import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app.counter.html',
  styleUrls: ['./app.counter.scss'],
})
export class CounterComponent {
  public counter: number = 10;

  increment(value: number): void {
    this.counter += 1;
  }
  decrement(value: number): void {
    this.counter -= 1;
  }
  reset(): void {
    this.counter = 10;
  }
}
