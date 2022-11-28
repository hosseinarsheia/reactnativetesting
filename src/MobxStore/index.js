import {
  observable,
  action,
  computed,
  flow,
  makeAutoObservable,
  makeObservable,
} from 'mobx';
import { inject, observer, useLocalObservable } from 'mobx-react';

class Counter {
  constructor() {
    makeAutoObservable(this);
  }

  counter = 0;

  increase = () => {
    this.counter = this.counter + 1;
  };

  decrease = () => {
    this.counter = this.counter + 1;
  };
}

export const counterStore = new Counter();
