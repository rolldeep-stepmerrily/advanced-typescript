/*
 typeof에 대해서.
 */

const printAll = (strs: string | string[] | null) => {
  if (typeof strs === 'object') {
    //prettier-ignore
    for (const s of strs) { // typeof null이 object라는걸 알 수 있다.
      console.log(s);
    }
  }
};
