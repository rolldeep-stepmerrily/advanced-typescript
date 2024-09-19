import { Equal, Expect } from 'src/helper';

const findUser = () => {
  return Promise.resolve({
    id: 123,
    name: 'john',
    email: 'john@example.com',
  });
};

type ReturnValue = Awaited<ReturnType<typeof findUser>>; // Promise를 벗겨냄

type tests = [Expect<Equal<ReturnValue, { id: number; name: string; email: string }>>];
