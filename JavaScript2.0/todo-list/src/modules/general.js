const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');

const mainTodos = document.getElementById('todo-list');
const btnsGeneralDates = document.querySelectorAll('.general');

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

  static hideGeneralBtnsSelected() {
    btnsGeneralDates.forEach((btn) => {
      if (btn.classList.contains('selected-category'))
        btn.classList.remove('selected-category');
    });
  }

  static hideProjectBtnsSelected() {
    document.querySelectorAll('.project-name').forEach((btn) => {
      if (btn.classList.contains('selected-project'))
        btn.classList.remove('selected-project');
    });
  }
}
