let obj: any = { x: 0 };

/*
  any 타입은 typescript보다 개발자가 현 상황을 더 잘 이해하고 있다고 가정함.
  고로 추가적인 타입 검사를 전혀 하지않으며 아래 코드는 전부 통과된다.
*/
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;
