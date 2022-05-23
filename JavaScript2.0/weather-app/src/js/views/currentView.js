import View from './View';

class currentView extends View {
  _parentElement = document.querySelector('.now-weather');
  _data;

  renderCurrentWeather(currentWeather) {
    this._data = currentWeather;

    const html = this._generateMarkup(this._data);

    this._clear();

    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  loadEventListener(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup(data) {
    const html = `
    <img
    src="${data.icon}"
    alt="weather-icon"
  />
  <div class="main-infos">
    <span class="titles">
      <h1>${data.city}</h1>
      <h2>${data.temperature}</h2>
    </span>
    <h3>${data.description}</h3>
    <span class="min-max">
      <div class="column-wrapper">
        <p>min</p>
        <p class="value">${data.min}</p>
      </div>
      <div class="column-wrapper">
        <p>max</p>
        <p class="value">${data.max}</p>
      </div>
    </span>
  </div>
  <div class="second-categories">
    <div class="column-wrapper">
      <i class="bi bi-cloud-drizzle"></i>
      <p>${data.rain === '' ? '0' : data.rain}mm</p>
    </div>
    <div class="column-wrapper">
      <i class="bi bi-droplet"></i>
      <p>${data.humidity}%</p>
    </div>
    <div class="column-wrapper">
      <i class="bi bi-wind"></i>
      <p>${data.wind}m/s</p>
    </div>
    <div class="column-wrapper">
      <p class="icon">Feels</p>
      <p>${data.feels}°</p>
    </div>
  </div>
  `;

    return html;
  }
}

export default new currentView();
