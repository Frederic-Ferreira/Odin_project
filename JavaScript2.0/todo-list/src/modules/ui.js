import {
  todoList,
  getTitle,
  getFormattedDate,
  getPriority,
} from './todos';

const todoForm = document.querySelector('.todo-form');
const newTodoList = document.querySelector('.new-todo');
const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');
const sideTodos = document.getElementById('general-list');
const sideProjects = document.getElementById('project-list');
const mainTodos = document.getElementById('todo-list');

const todoEventListener = () => {
  if (!newTodoList.classList.contains('hidden')) {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = createTodo(
        title.value,
        date.value,
        priority.value
      );
      todoList.push(newTodo);
    });
  }
};

const renderTodoList = () => {
  if (todoList.length !== 0) {
    console.log(todoList);
    todoList.map((todo) => {
      const html = `
                    <li class="todo">
                        <div class="check"></div>
                        <h3>${getTitle(todo)}</h3>
                        <p>${getFormatedDate(todo.date)}</p>
                        <div class="span-todo-list">
                        <i class="edit outline icon"></i>
                        <i class="trash alternate outline icon"></i>
                        </div>
                    </li>`;
      mainTodos.insertAdjacentHTML('afterend', html);
    });
  }
};

export { renderTodoList };
