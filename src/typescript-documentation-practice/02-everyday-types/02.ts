const names = ['alice', 'bob', 'eve'];

/*
  names에 대한 타입 표기는 없지만
  익명 함수(names.forEach())에 대해서 콜백함수의 매개변수 s에 대한 타입을
  typescript가 문맥적으로 string이라고 추론함.
*/
names.forEach((s) => {
  console.log(s.toUpperCase());
});
