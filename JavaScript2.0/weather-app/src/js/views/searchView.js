import View from './View';

class searchView extends View {
  _parentElement = document.getElementById('city');
  _search = document.querySelector('.bi-search');
  _data;

  _getInput() {
    const input = this._parentElement.value;
    this._clearInput();
    return input;
  }

  _clearInput() {
    this._parentElement.value = '';
  }

  _clearCityList() {
    this._parentElement.closest(
      'form'
    ).nextElementSibling.firstElementChild.innerHTML = '';
  }

  renderInputCityList(data) {
    this._data = data;

    this._clearCityList();

    const dropdown =
      this._parentElement.closest('form').nextElementSibling
        .firstElementChild;

    this._data.forEach((city, i) => {
      const html = this._generateMarkup(city);

      dropdown.insertAdjacentHTML('afterbegin', html);

      if (i === this._data.length - 1)
        dropdown.lastElementChild.lastElementChild.style.border =
          'none';
      dropdown.lastElementChild.style.borderBottomLeftRadius = '20px';
      dropdown.lastElementChild.style.borderBottomRightRadius =
        '20px';
    });
  }

  addInputChangeEventListener(handler) {
    this._parentElement
      .closest('form')
      .addEventListener('input', () => {
        if (this._parentElement.value === '') return;

        handler(this._parentElement.value);
      });
  }

  addHandlerSearch(handler) {
    const passInputHandler = () => {
      if (this._parentElement.value === '') return;

      const input = this._getInput();
      handler(input);
    };

    this._parentElement
      .closest('form')
      .addEventListener('submit', function (e) {
        e.preventDefault();

        passInputHandler();
      });

    this._search.addEventListener('click', passInputHandler);
  }

  _generateMarkup(data) {
    const html = `
    <li>
        <p>${data.name}, ${data.country}</p>
     </li>
    `;

    return html;
  }
}

export default new searchView();
