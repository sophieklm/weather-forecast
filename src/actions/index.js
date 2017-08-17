const API_KEY = '188d4bfce0208cc4d0252a7dc677a8f6';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
