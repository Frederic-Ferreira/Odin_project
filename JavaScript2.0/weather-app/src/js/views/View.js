export default class View {
  renderSpinner() {
    const html = `
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
