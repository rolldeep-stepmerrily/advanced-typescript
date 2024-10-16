type NonEmptyArray<T> = [T, ...Array<T>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

//배열 내에 반드시 하나 이상의 string 요소가 있어야하기 때문에 빈 배열일 때 에러가 남.
makeEnum([]);
