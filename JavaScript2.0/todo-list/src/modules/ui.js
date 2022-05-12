import todos from './todos';

const todoForm = document.querySelector('.todo-form');
const newTodoLi = document.querySelector('.new-todo');
const mainTodos = document.getElementById('todo-list');

const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');

const btnAddTodo = document.getElementById('create-todo');
const btnExitNewTodo = document.querySelector('.exit--new-todo');

export default class UI {
  edition = false;

  static todoFormEventListener() {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const id = Math.floor(Math.random() * 100);
      const newTodo = todos.createTodo(
        title.value,
        date.value,
        priority.value,
        id
      );
      todos.todoList.push(newTodo);

      UI.toggleNewTodo();
      UI.renderTodoList();
    });
  }

  static exitNewTodoEventListener() {
    btnExitNewTodo.addEventListener('click', UI.toggleNewTodo);
  }

  static editTodoEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('edit')) return;

      todos.modifyTodoForm(e.target.closest('li'));
      UI.modifiedTodoFormEventListener();
    });
  }

  static modifiedTodoFormEventListener() {
    const form = document.querySelector('.modified-todo-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target.closest('form');
      UI.renderModifiedTodo(form);
    });
  }

  static renderModifiedTodo(form) {
    const title = form.childNodes[3].value;
    const date = form.childNodes[7].value;
    const priority = form.childNodes[11].value;

    const li = document.createElement('li');
    const html = `
          <div class="check"></div>
            <h3>${title}</h3>
            <p>${todos.getFormattedDate(date)}</p>
            <div class="span-todo-list">
              <i class="edit outline icon"></i>
              <i class="trash alternate outline icon"></i>
          </div>
    `;
    li.classList.add('todo');
    li.classList.add(priority);
    li.insertAdjacentHTML('afterbegin', html);
    form.closest('#todo-list').replaceChild(li, form.closest('li'));
  }

  static addTodoEventListener() {
    btnAddTodo.addEventListener('click', UI.toggleNewTodo);
  }

  static toggleNewTodo() {
    mainTodos.appendChild(newTodoLi);
    newTodoLi.classList.toggle('hidden');
  }

  static renderTodoList() {
    if (todos.todoList.length !== 0) {
      todos.todoList.map((todo) => {
        const li = document.createElement('li');
        const html = `
                      <li class="todo ${todos.getPriority(todo)}">
                          <div class="check"></div>
                          <h3>${todos.getTitle(todo)}</h3>
                          <p>${todos.getFormattedDate(todo.date)}</p>
                          <div class="span-todo-list">
                          <i class="edit outline icon"></i>
                          <i class="trash alternate outline icon"></i>
                          </div>
                      </li>`;
        li.insertAdjacentHTML('afterbegin', html);
        if (!mainTodos.textContent.includes(li.textContent))
          mainTodos.insertAdjacentHTML('beforeend', html);
      });
    }
  }
}
