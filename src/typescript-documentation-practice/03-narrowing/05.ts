/*
  in operator narrowing 
*/
type TFish = { swim: () => void };
type TBird = { fly: () => void };

const move = (animal: TFish | TBird) => {
  // prettier-ignore
  if ('swim' in animal) { // animal에 swim이 있다면 이라는 조건을 통과하기 때문에 
    return animal.swim();  // animal은 TFish 타입으로 추론되었다.
  }

  return animal.fly(); // 여기까지 도달했다면 animal은 TFish가 아니기 때문에 TBird로 추론되었다.
};
