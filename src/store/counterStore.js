import { createEvent, createStore } from 'effector';

// Events
export const increment = createEvent('incrementar');
export const decrement = createEvent('decrementar');
export const resetCounter = createEvent('resetear counter');

// Store
export const $counterStore = createStore(0)
  .on(increment, (state) => state + 1)
  .on(decrement, (state) => state - 1)
  .reset(resetCounter);
