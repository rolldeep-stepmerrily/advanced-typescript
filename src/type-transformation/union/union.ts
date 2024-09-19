type A =
  | {
      type: 'a';
      a: string;
    }
  | {
      type: 'b';
      b: string;
    }
  | {
      type: 'c';
      c: string;
      d: string;
    };

//discriminated union

type B = 'a' | 'b' | 'c';

enum C {
  a = 'a',
  b = 'b',
  c = 'c',
}
