/*
  타입 별칭의 기본 예시
*/
type TPoint = {
  x: number;
  y: number;
};

const printCoordWithTypeAlias = (point: TPoint) => {
  console.log(`The coordinate's x value is ${point.x}`);
  console.log(`The coordinate's x value is ${point.y}`);
};

printCoordWithTypeAlias({ x: 1000, y: 2000 });
