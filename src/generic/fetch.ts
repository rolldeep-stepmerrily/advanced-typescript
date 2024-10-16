import { Equal, Expect } from 'src/helper';
import { expect, it } from 'vitest';

const fetchData = async <T>(url: string) => {
  const data: T = await fetch(url).then((response) => response.json());

  return data;
};

it('Should fetch data from an API', async () => {
  const data = await fetchData<{ name: string }>('https://swapi.dev/api/people/1');

  expect(data.name).toEqual('Luke Skywalker');

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
