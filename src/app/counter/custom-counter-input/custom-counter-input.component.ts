import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((channelName) => {
      console.log('channel name observable called');

      this.channelName = channelName;
    });
  }

  onAdd() {
    // console.log(this.value);

    this.store.dispatch(customIncrement({ count: this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
