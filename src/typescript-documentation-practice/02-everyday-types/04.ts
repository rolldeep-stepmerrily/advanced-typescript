/*
  유니언 타입의 기본 예시
  typeof를 통과한 순간부터는 id가 좁혀진 특정 타입을 가진다고 추론한다.
*/
const printId = (id: number | string) => {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
};
printId(100);
printId('abc');
