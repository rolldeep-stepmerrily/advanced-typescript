/*
  객체 타입의 기본 예시
*/
const printCoord = (point: { x: number; y: number }) => {
  console.log(`The coordinate's x value is ${point.x}`);
  console.log(`The coordinate's x value is ${point.y}`);
};
printCoord({ x: 1, y: 2 });

/*
  옵셔널 프로퍼티
  ?로 옵셔널 처리된 것은 해당 함수를 실행할 때 존재하지 않아도 되고,
  undefined 처리된다.
*/
const printName = (obj: { first: string; last?: string }) => {
  console.log(`his firstname is ${obj.first.toUpperCase()}`);
  console.log(`his lastname is ${obj.last?.toUpperCase()}`);
};
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
