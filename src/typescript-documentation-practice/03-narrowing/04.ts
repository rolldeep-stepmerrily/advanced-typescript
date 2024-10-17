/*
  Equality narrowing
*/

const example = (x: string | number, y: string | boolean) => {
  //prettier-ignore
  if (x === y) {// x와 y가 같다면
    x.toUpperCase(); // x와 y는 string 일 수 밖에없다.
    y.toLocaleLowerCase();
  }
};
