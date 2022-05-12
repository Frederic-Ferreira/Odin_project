export default class todos {
  static todoList = [];

  static createTodo(title, date, priority) {
    return {
      title,
      date,
      priority,
    };
  }

  static newTodo(parent) {
    const html = `
            <li class="new-todo">
            <form class="todo-form">
              <label for="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                minlength="3"
                placeholder=" "
                required
              />
              <label for="date">Date</label>
              <input type="date" id="date" name="date" required />
              <label for="priority">Priority</label>
              <select id="priority" name="priority">
                <option value="high">High</option>
                <option value="normal" selected>Normal</option>
                <option value="low">Low</option>
              </select>
              <button>OK</button>
            </form>
          </li>`;
    parent.insertAdjacentHTML('beforeend', html);
  }

  static getTitle(todo) {
    return todo.title;
  }

  static getFormattedDate(todoDate) {
    const year = todoDate.split('-')[0];
    const month = todoDate.split('-')[1];
    const day = todoDate.split('-')[2];
    return `${day}/${month}/${year}`;
  }

  static getPriority = (todo) => {
    return todo.priority;
  };
}
