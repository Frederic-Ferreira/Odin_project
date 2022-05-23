import '@babel/polyfill';
import * as model from './model';
import * as helpers from './helpers';
import currentView from './views/currentView';
import searchView from './views/searchView';

const controlWeather = async () => {
  try {
    currentView.renderSpinner();

    const { lat, long } = model.state.currentCity;

    await model.getCurrentWeather(lat, long);
    await model.getHourlyWeather(lat, long);
    await model.getWeeklyWeather(lat, long);

    currentView.renderCurrentWeather(model.state.currentWeather);
    // helpers.convertTime(model.state.currentWeather.time);
  } catch (err) {
    console.error(err);
  }
};

const controlClientCoordinates = async () => {
  try {
    await model.getClientCoordinates();

    controlWeather();
  } catch (err) {
    console.log(err);
  }
};

const controlClientInput = async (input) => {
  try {
    await model.getInputCoordinates(input);

    controlWeather();
  } catch (err) {
    console.log(err);
  }
};

const init = () => {
  currentView.renderSpinner();
  currentView.loadEventListener(controlClientCoordinates);
  searchView.addHandlerSearch(controlClientInput);
};

init();
