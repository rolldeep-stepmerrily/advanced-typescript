import { Equal, Expect } from 'src/helper';

type Fruit =
  | {
      name: 'apple';
      color: 'red';
    }
  | {
      name: 'banana';
      color: 'yellow';
    }
  | {
      name: 'orange';
      color: 'orange';
    };

type TransformedFruit = {
  [F in Fruit as F['color']]: `${F['name']}:${F['color']}`;
}[Fruit['color']];

type tests = [Expect<Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>>];
