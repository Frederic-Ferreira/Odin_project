import todos from './todos';

const todoForm = document.querySelector('.todo-form');
const newTodoLi = document.querySelector('.new-todo');
const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');
const sideTodos = document.getElementById('general-list');
const sideProjects = document.getElementById('project-list');
const mainTodos = document.getElementById('todo-list');
const btnTodo = document.getElementById('create-todo');

export default class UI {
  static todoEventListener() {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = todos.createTodo(
        title.value,
        date.value,
        priority.value
      );
      todos.todoList.push(newTodo);
      UI.toggleHidden();
      UI.renderTodoList();
    });
  }

  static btnTodoEventListener() {
    btnTodo.addEventListener('click', UI.addTodo);
  }

  static addTodo() {
    todos.newTodo(mainTodos);
  }

  static toggleHidden() {
    newTodoLi.classList.toggle('hidden');
  }

  static renderTodoList() {
    if (todos.todoList.length !== 0) {
      todos.todoList.map((todo) => {
        const html = `
                      <li class="todo">
                          <div class="check"></div>
                          <h3>${todos.getTitle(todo)}</h3>
                          <p>${todos.getFormattedDate(todo.date)}</p>
                          <div class="span-todo-list">
                          <i class="edit outline icon"></i>
                          <i class="trash alternate outline icon"></i>
                          </div>
                      </li>`;
        mainTodos.insertAdjacentHTML('beforeend', html);
      });
    }
  }
}
