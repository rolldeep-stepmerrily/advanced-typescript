/*
  내로잉(Narrowing)
  
  더 넓은 타입에서 더 구체적인 타입으로 타입의 범위를 좁히는 과정을 뜻함.
*/

const padLeft = (padding: number | string, input: string): string => {
  if (typeof padding === 'number') {
    return `${' '.repeat(padding)}${input}`;
  }

  return `${padding}${input}`;
};
