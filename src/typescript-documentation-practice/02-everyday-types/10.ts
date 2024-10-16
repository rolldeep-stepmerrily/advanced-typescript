/*
  리터럴 추론

  이 예시에서 req.method가 'GET' 이었다면 string으로 추론되지만
  as 'GET'을 붙힘으로써 req.method의 타입은 'GET' 리터럴 타입으로 단언된다. 
*/

const req = { url: 'https://example.com', method: 'GET' as 'GET' };

const method = req.method;

/* 
  객체 전체를 리터럴 타입으로 변환

  as const 접미사는 객체 전체를 리터럴 타입의 값이 대입되도록 보장함.
*/

const request = { url: 'https://example.com', method: 'GET' } as const;

const url = request.url;
