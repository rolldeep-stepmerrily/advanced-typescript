const intFunction = (i: number) => {
  return i;
};

const stringFunction = (str: string) => {
  return str;
};

const objFunction = (obj: Record<any, any>) => {
  return obj;
};

const boolFunction = (bool: boolean) => {
  return bool;
};

const genericFunction = <T>(arg: T) => {
  return arg;
};

const result: number = genericFunction<number>(1);
