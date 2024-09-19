import { Equal, Expect } from 'src/helper';

const findLocationWeather = (locationId: number) => {
  return `${locationId}`;
};

type FindLocationWeatherReturn = ReturnType<typeof findLocationWeather>; // string

const findDetailedWeather = (
  locationId: number,
  details?: {
    tempUnit?: 'C' | 'F';
    includeForecast?: boolean;
  }
) => {};

type FindDetailWeatherParameters = Parameters<typeof findDetailedWeather>;

type tests = [
  Expect<Equal<FindLocationWeatherReturn, string>>,
  Expect<
    Equal<
      FindDetailWeatherParameters,
      [locaionId: number, details?: { tempUnit?: 'C' | 'F'; includeForecast?: boolean }]
    >
  >
];
