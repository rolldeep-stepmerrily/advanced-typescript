/*
  타입 단언

  typescript보다 개발자가 타입에 대한 정보를 더 아는 경우 사용할 수 있다.
  document.getElementById는 HTMLElement가 반환되는데, 그 HTMLElement가 canvas라면 
  개발자가 HTMLCanvasElement로 단언할 수 있는 것.
  방식은 아래 두개가 똑같이 동작한다.
*/
const myCanvas1 = document.getElementById('main_canvas1') as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas2');
