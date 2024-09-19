import { Equal, Expect } from 'src/helper';

type First = 'user' | 'post' | 'comment';
type Second = 'Id' | 'Name';

type ObjectOfKeys = Record<`${First}${Second}`, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >
];
