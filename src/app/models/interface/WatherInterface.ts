export interface WatherDatas {
  coord: {
    lon: number,
    lat: number
  },

  wather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],

  base: string
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  },

  visibility: number,
  wind: {
    deg: number,
    gust: number,
    speed: number
  },

  clouds: {
    all: number
  },

  dt: number,

  sys: {
    country: string,
    sunrise: number,
    sunset: number
  },

  timezone: number,
  id: number,
  name: string,
  code: number
}
