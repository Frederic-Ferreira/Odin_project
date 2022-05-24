import View from './View';

class searchView extends View {
  _parentElement = document.getElementById('city');
  _search = document.querySelector('.bi-search');

  _getInput() {
    const input = this._parentElement.value;
    this._clearInput();
    return input;
  }

  _clearInput() {
    this._parentElement.value = '';
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
}

export default new searchView();
