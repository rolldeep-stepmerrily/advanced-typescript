import { Equal, Expect } from 'src/helper';

export const returnWhatIPassIn = <T extends String>(str: T) => {
  return str;
};
const a = returnWhatIPassIn('a');

type test1 = Expect<Equal<typeof a, 'a'>>;

returnWhatIPassIn(1);

returnWhatIPassIn(true);

returnWhatIPassIn({
  foo: 'bar',
});
