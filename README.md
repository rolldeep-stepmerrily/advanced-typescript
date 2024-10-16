## Source

본 리포지토리는 [애프터캠프](https://www.inflearn.com/users/1156653/@aftercamp)님의 [실전 연습으로 익히는 고급 타입스크립트 기술](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84%EC%97%B0%EC%8A%B5-%EA%B3%A0%EA%B8%89-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
을 수강하며 정리한 것과, 
[typescriptlang.org](https://www.typescriptlang.org/)의 Handbook을 토대로 공부한 것을 정리한 리포지토리입니다.
  
저작권 문제 있을 시 rolldeep@stepmerrily.com 로 연락부탁드립니다!

## tsconfig.json options
```json
{
  "compilerOptions": {
    "nonImplicitAny": true, // 타입이 any로 암묵적으로 추론되는 변수에 대해 오류 발생
    "strictNullChecks": true, // 타입에 기본적으로 포함되던 null 과 undefined가 포함되지 않게됨. 명시적으로 null과 undefined를 처리해야함. 
    "target" : "ES3" // javascript로 컴파일 된 코드가 실행될 환경과 호환성을 결정함.
    
  }
}
 