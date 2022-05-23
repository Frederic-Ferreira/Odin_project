import { weatherKEY } from './config';

export const state = {
  currentCity: {},
  currentWeather: {},
  hourlyWeather: [],
  weeklyWeather: [],
};

export const getClientCoordinates = async () => {
  await new Promise((resolve) => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(successRes, errorRes);
    else {
      throw Error(
        'Your navigator does not support geolocation, please enter a city name'
      );
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

export const getInputCoordinates = async (input) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${weatherKEY}`
    );

    if (!response.ok)
      throw Error(
        'Something went wrong with the server, please try again ...'
      );

    const data = await response.json();

    state.currentCity = {
      name: data[0].name,
      lat: data[0].lat,
      long: data[0].lon,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentWeather = async (lat, long) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKEY}&lang=fr`
    );

    if (!response.ok)
      throw Error(
        'Something went wrong with the server, please try again ...'
      );

    const data = await response.json();

    state.currentWeather = {
      description: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      temperature: data.main.temp,
      feels: data.main.feels_like,
      humidity: data.main.humidity,
      min: data.main.temp_min,
      max: data.main.temp_max,
      wind: data.wind.speed,
      rain: data.rain === undefined ? '' : data.rain['1h'],
      snow: data.snow === undefined ? '' : data.snow['1h'],
      time: data.dt,
      city: data.name,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getHourlyWeather = async (lat, long) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${weatherKEY}`
    );

    if (!response.ok)
      throw Error(
        'Something went wrong with the server, please try again ...'
      );

    const { hourly } = await response.json();

    hourly.forEach((hour) => {
      const obj = {
        hourNumber: hour.dt,
        icon: `https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`,
        temperature: hour.temp,
        rain: hour.rain === undefined ? '' : hour.rain['1h'],
        snow: hour.snow === undefined ? '' : hour.snow['1h'],
        wind: hour.wind_speed,
      };
      state.hourlyWeather.push(obj);
    });
  } catch (err) {
    console.log(err);
  }
};

export const getWeeklyWeather = async (lat, long) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${weatherKEY}`
    );

    if (!response.ok)
      throw Error(
        'Something went wrong with the server, please try again ...'
      );

    const { daily } = await response.json();

    daily.forEach((day, i) => {
      if (i !== 0) {
        const obj = {
          dayName: day.dt,
          icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`,
          minTemp: day.temp.min,
          maxTemp: day.temp.max,
          rain: day.rain === undefined ? '' : day.rain,
          snow: day.snow === undefined ? '' : day.snow,
          wind: day.wind_speed,
        };
        state.weeklyWeather.push(obj);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
