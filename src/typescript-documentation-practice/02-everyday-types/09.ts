/*
  리터럴 타입
*/

const printText = (s: string, alignment: 'left' | 'right' | 'center') => {
  console.log(`${alignment} - ${s}`);
};
printText('Hello, world!', 'left');

const compare = (a: string, b: string): -1 | 0 | 1 => {
  return a === b ? 0 : a > b ? 1 : -1; // string 타입의 비교는 사전식 순서에 기반하여 크고 작음을 가린다.
};
