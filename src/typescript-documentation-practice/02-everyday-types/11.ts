/*
  Not null 단언 연산자
*/

const liveDangerously = (x?: number | undefined) => {
  const a = x!; // a의 타입이 number로 고정되었다.

  console.log(a);
};
