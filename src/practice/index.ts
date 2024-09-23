type TCoordinate = [number, number];

const myTCoordinate: TCoordinate = [10, 20];

interface ICoordinate {
  lat: number;
  lng: number;
}

const myICoordinate: ICoordinate = { lat: 10, lng: 20 };

console.log(typeof myTCoordinate);
