import { weatherKEY } from './config';

export const state = {
  currentCity: {},
  currentWeather: {},
  hourlyWeather: {},
  weeklyWeather: {},
};

export const getClientCoordinates = async () => {
  await new Promise((resolve) => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(successRes, errorRes);
    else {
      throw Error('Your navigator does not support geolocation');
    }

    function successRes(position) {
      state.currentCity = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      resolve();
    }

    function errorRes(err) {
      if (err.code == 1) {
        throw Error(
          'Please, allow your browser to access your position or search a specific city name.'
        );
      } else if (err.code == 2) {
        throw Error(
          "The network is down or the positioning service can't be reached."
        );
      } else if (err.code == 3) {
        throw Error(
          'The attempt timed out before it could get the location data.'
        );
      } else {
        throw Error('Geolocation failed due to unknown error.');
      }
    }
  });
};

export const getCurrentWeather = async (lat, long) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKEY}`
    );

    if (!response.ok)
      throw Error(
        'Something went wrong with the server, please try again ...'
      );

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherIcon = (data) => {
  const { weather } = data;
  const { icon } = weather[0];

  const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return img;
};
