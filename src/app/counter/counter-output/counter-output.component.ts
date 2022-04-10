import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter?: number;

  counterSubscription?: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // 1st approach
    this.counterSubscription = this.store
      .select(getCounter)
      .subscribe((counter) => {
        console.log('counter observable called');

        this.counter = counter;
      });
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
