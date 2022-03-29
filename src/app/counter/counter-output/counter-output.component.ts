import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter?: number;
  counter$?: Observable<CounterState>;

  counterSubscription?: Subscription;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // 1st approach
    this.counterSubscription = this.store
      .select('counter')
      .subscribe((data) => {
        this.counter = data.counter;
      });

    // 2nd approach
    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
