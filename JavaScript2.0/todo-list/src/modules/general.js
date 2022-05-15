const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');
const mainTodos = document.getElementById('todo-list');

export default class general {
  static clearInputFields() {
    title.value = '';
    date.value = '';
    priority.value = 'normal';
  }

  static toggleHidden(node) {
    node.classList.toggle('hidden');
  }

  static clearMainDisplay() {
    mainTodos.innerHTML = '';
  }
}
