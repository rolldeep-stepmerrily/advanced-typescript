import { Equal, Expect } from 'src/helper';

type Routes = '/users' | '/users/:id' | '/products' | '/products/:id';

type DynamicRoutes = Extract<Routes, `/${string}/:id`>;

type tests = [Expect<Equal<DynamicRoutes, '/users/:id' | '/products/:id'>>];
