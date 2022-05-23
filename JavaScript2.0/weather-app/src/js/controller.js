import '@babel/polyfill';

import * as model from './model';

import mainView from './views/mainView';
import currentView from './views/currentView';
import searchView from './views/searchView';
import hourlyView from './views/hourlyView';
import weeklyView from './views/weeklyView';

const controlWeather = async () => {
  try {
    const { lat, long } = model.state.currentCity;

    await model.getCurrentWeather(lat, long);
    await model.getHourlyWeather(lat, long);
    await model.getWeeklyWeather(lat, long);

    currentView.renderCurrentWeather(
      model.state.currentWeather,
      model.state.lang
    );
    hourlyView.renderHourlyWeather(
      model.state.hourlyWeather,
      model.state.lang
    );
    weeklyView.renderWeeklyWeather(
      model.state.weeklyWeather,
      model.state.lang
    );
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

const controlLanguage = (lang) => {
  model.setStateLang(lang);

  mainView.languageDisplay(model.state.lang);
};

const init = async () => {
  mainView.addHandlerLang(controlLanguage);

  currentView.loadEventListener(controlClientCoordinates);
  searchView.addHandlerSearch(controlClientInput);
};

init();
