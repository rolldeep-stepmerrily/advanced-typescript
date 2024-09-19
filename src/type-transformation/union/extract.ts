import { Equal, Expect } from 'src/helper';

export type Event =
  | {
      type: 'click';
      event: MouseEvent;
    }
  | { type: 'focus'; event: FocusEvent }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, unknown>;

type tests = [
  Expect<
    Equal<
      ClickEvent,
      | { type: 'click'; event: MouseEvent }
      | { type: 'focus'; event: FocusEvent }
      | { type: 'keydown'; event: KeyboardEvent }
    >
  >
];
