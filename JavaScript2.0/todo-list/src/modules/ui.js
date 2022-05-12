import todos from './todos';

const todoForm = document.querySelector('.todo-form');
const newTodoLi = document.querySelector('.new-todo');
const mainTodos = document.getElementById('todo-list');

const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');

const btnAddTodo = document.getElementById('create-todo');
const btnsEditTodo = document.querySelectorAll('.edit');
const btnExitNewTodo = document.querySelector('.exit--new-todo');

export default class UI {
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
    btnsEditTodo.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        todos.modifyTodo(e.target);
      });
    });
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
