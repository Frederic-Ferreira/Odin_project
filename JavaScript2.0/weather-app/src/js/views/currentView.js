import View from './View';

class currentView extends View {
  _parentElement = document.querySelector('.container');
  _data;

  renderCurrentWeather(currentWeather) {
    _data = currentWeather;

    const html = this._generateMarkup(_data);

    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  loadEventListener(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup(data) {}
}

export default new currentView();
