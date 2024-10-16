import { Equal, Expect } from 'src/helper';
import { preProcessFile } from 'typescript';

const func = (foo: string, obj: { bar: number; bas: boolean }): void => {};

type FuncParameters = Parameters<typeof func>;

type tests = [Expect<Equal<FuncParameters, [string, { bar: number; bas: boolean }]>>];
