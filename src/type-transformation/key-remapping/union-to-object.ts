import { Equal, Expect } from 'src/helper';

type Route = '/' | '/about' | '/admin' | '/admin/users';

type RoutesObject = {
  [K in Route]: K;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': '/';
        '/about': '/about';
        '/admin': '/admin';
        '/admin/users': '/admin/users';
      }
    >
  >
];
