/*
  인터페이스의 기본 예시
*/

interface IPoint {
  x: number;
  y: number;
}

const printcoordWithInterface = (point: IPoint) => {
  console.log(`The coordinate's x value is ${point.x}`);
  console.log(`The coordinate's x value is ${point.y}`);
};

printcoordWithInterface({ x: 10000, y: 20000 });
