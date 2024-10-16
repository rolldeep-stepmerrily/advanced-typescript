const user = {
  name: 'rolldeep',
  age: 29,
};

/*
  javascript에서는 아래 코드가 undefined를 return 한다.
  typescript에서는 location이 정의되어 있지 않아서, 오류를 발생시킨다.
*/
user.location;
