/*
  interface와 type의 차이
*/

// 확장
interface IAnimal {
  name: string;
}

interface IBear extends IAnimal {
  hasHoney: boolean;
}

type TAnimal = {
  name: string;
};

type TBear = TAnimal & {
  hasHoney: boolean;
};

/*
  interface는 선언을 다시할 경우 interface가 병합되며 이것을 declaration merging 이라고 한다.
  type은 한번 생선된 뒤엔 달라질 수 없다.
*/
interface IPlant {
  name: string;
}

interface IPlant {
  hasHoney: boolean;
}

type TPlant = {
  name: string;
};

type TPlant = {
  hasHoney: boolean;
};
