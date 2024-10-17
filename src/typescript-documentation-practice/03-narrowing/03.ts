/*
  Truthiness narrowing
*/

const printAll2 = (strs: string | string[] | null) => {
  //prettier-ignore
  if (strs && typeof strs === 'object') { // strs 자체로 truthy 체크를 하고, typeof strs === 'object'를 이용하여서
    for (const s of strs) { // strs가 string[] 임을 정확히 추론해낸다.
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  }
};
