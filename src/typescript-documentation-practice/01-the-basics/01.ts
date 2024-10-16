const message = 'Hello World!';

message.toLowerCase();

/*
  message가 string이기 때문에 message(); 는 실행될 수 없지만
  javascript 런타임은 코드가 실행 될때서야 해당 값이 어떤 동작과 능력을 가지고 있는지 확인한다.
  typescript는 message가 string이기 때문에 함수로서 호출될 수 없다고 추론한다. 
*/

message();
