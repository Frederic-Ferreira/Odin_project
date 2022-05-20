import View from './View';

class currentView extends View {
  _parentElement;

  loadEventListener(handler) {
    window.addEventListener('load', handler);
  }
}

export default new currentView();
