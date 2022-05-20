export default class View {
  renderSpinner() {
    const html = `
          <div class="spinner">
              <i class="bi bi-arrow-clockwise"></i>
          </div>
          `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
