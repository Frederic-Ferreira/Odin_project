import todos from './todos';
import general from './general';

const todoForm = document.querySelector('.todo-form');
const newTodoLi = document.querySelector('.new-todo');
const mainTodos = document.getElementById('todo-list');

const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');

const btnAddTodo = document.getElementById('create-todo');
const btnExitNewTodo = document.querySelector('.exit--new-todo');

export default class UI {
  delete = false;

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

      general.clearInputFields();
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

      const li = e.target.closest('li');

      UI.renderModifyTodoForm(li);
      UI.modifiedTodoFormEventListener();
    });
  }

  static deleteTodoEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('trash')) return;

      const confirm = e.target.closest('div').nextElementSibling;

      // Hide any other possible confirm-delete already open
      UI.hideConfirmsDelete();

      // Show the confirm-delete the user just clicked
      general.toggleHidden(confirm);

      // Set EventListener to possibly hide the confirm-delete
      UI.hideConfirmDeleteEventListener();
      UI.delete = true;
    });
  }

  static hideConfirmDeleteEventListener() {
    document.addEventListener('click', (e) => {
      const guardClause = e.target.closest('li');

      if (UI.delete === false) return;

      // If the user click anywhere but on a todo element
      if (guardClause === null) {
        UI.hideConfirmsDelete();
        UI.delete = false;
      }
    });
  }

  static hideConfirmsDelete() {
    document.querySelectorAll('.delete-request').forEach((btn) => {
      if (!btn.classList.contains('hidden'))
        general.toggleHidden(btn);
    });
  }

  static confirmDeleteEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('delete-request')) return;
      const index = e.target.closest('li').dataset.index;

      todos.deleteTodo(index);
      UI.renderTodoList();
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

  static addTodoEventListener() {
    btnAddTodo.addEventListener('click', UI.toggleNewTodo);
  }

  static toggleNewTodo() {
    mainTodos.appendChild(newTodoLi);
    general.toggleHidden(newTodoLi);
  }

  static toggleCheckedEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('check')) return;

      const btn = e.target;
      const li = e.target.closest('li');
      todos.toggleCheck(btn, li);
    });
  }

  static renderModifyTodoForm(todoNode) {
    const title = todoNode.childNodes[3].textContent;
    const date = todoNode.childNodes[5].textContent;
    const priority = todoNode.classList.value.slice(5);
    const index = todos.getIndex(todoNode);

    const li = document.createElement('li');
    const html = `
    <form class="modified-todo-form" data-index="${index}">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        minlength="3"
        value="${title}"
        required
      />
      <label for="date">Date</label>
      <input type="date" id="date" name="date" value="${todos.inputFormattedDate(
        date
      )}" required />
      <label for="priority">Priority</label>
      <select id="priority" name="priority">
        <option value="high" ${
          priority === 'high' ? 'selected' : ''
        }>High</option>
        <option value="normal" ${
          priority === 'normal' ? 'selected' : ''
        }>Normal</option>
        <option value="low" ${
          priority === 'low' ? 'selected' : ''
        }>Low</option>
      </select>
      <button>OK</button>
  </form>`;
    li.classList.add('new-todo');
    li.insertAdjacentHTML('afterbegin', html);
    todoNode.closest('#todo-list').replaceChild(li, todoNode);
  }

  static renderModifiedTodo(form) {
    const title = form.childNodes[3].value;
    const date = form.childNodes[7].value;
    const priority = form.childNodes[11].value;
    const index = form.dataset.index;

    todos.modifyTodo(index, title, date, priority);

    const li = document.createElement('li');
    const html = `
          <div class="check"></div>
            <h3>${title}</h3>
            <p>${todos.getFormattedDate(date)}</p>
            <div class="span-todo-list">
              <i class="edit outline icon"></i>
              <i class="trash alternate outline icon"></i>
            </div>
            <div class="delete-request hidden"></div>
    `;
    li.classList.add('todo');
    li.classList.add(priority);
    li.dataset.index = index;
    li.insertAdjacentHTML('afterbegin', html);
    form.closest('#todo-list').replaceChild(li, form.closest('li'));
  }

  static renderTodoList() {
    mainTodos.innerHTML = '';
    if (todos.todoList.length !== 0) {
      todos.todoList.map((todo, i) => {
        const html = `<li class="todo ${todos.getPriority(
          todo
        )}" data-index="${i}">
                        <div class="check"></div>
                          <h3>${todos.getTitle(todo)}</h3>
                          <p>${todos.getFormattedDate(todo.date)}</p>
                          <div class="span-todo-list">
                            <i class="edit outline icon"></i>
                            <i class="trash alternate outline icon"></i>
                          </div>
                          <div class="delete-request hidden"></div>
                      </li>`;
        mainTodos.insertAdjacentHTML('beforeend', html);
      });
    }
  }
}
