const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');

const mainTodos = document.getElementById('todo-list');

const projectFormInput = document.getElementById('project-input');
const projectList = document.getElementById('project-list');

export default class general {
  static clearTodoInputFields() {
    title.value = '';
    date.value = '';
    priority.value = 'normal';
  }

  static clearProjectInputField() {
    projectFormInput.value = '';
  }

  static toggleHidden(node) {
    node.classList.toggle('hidden');
  }

  static clearMainDisplay() {
    mainTodos.innerHTML = '';
  }

  static clearProjectDisplay() {
    projectList.innerHTML = '';
  }
}
