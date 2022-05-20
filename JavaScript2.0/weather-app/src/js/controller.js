import '@babel/polyfill';
import * as model from './model';
import currentView from './views/currentView';

const controlWeather = async () => {
  try {
    await model.getClientCoordinates();

    const { lat, long } = model.state.currentCity;

    const data = await model.getCurrentWeather(lat, long);

    const icon = model.getWeatherIcon(data);
  } catch (err) {
    console.error(err);
  }
};

const init = () => {
  currentView.loadEventListener(controlWeather);
};

init();
