export default class todos {
  static todoList = [];

  static createTodo(title, date, priority, id, category) {
    return {
      title,
      date,
      priority,
      id,
      category,
    };
  }

  static modifyTodoForm(todoNode) {
    const title = todoNode.childNodes[3].textContent;
    const date = todoNode.childNodes[5].textContent;
    const priority = todoNode.classList.value.slice(5);

    const li = document.createElement('li');
    const html = `
    <form class="modified-todo-form">
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
      <input type="date" id="date" name="date" value="${this.inputFormattedDate(
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
      <span class="exit--new-todo">&times;</span>
  </form>`;
    li.classList.add('new-todo');
    li.insertAdjacentHTML('afterbegin', html);
    todoNode.closest('#todo-list').replaceChild(li, todoNode);
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

  static inputFormattedDate(todoDate) {
    const year = todoDate.split('/')[2];
    const month = todoDate.split('/')[1];
    const day = todoDate.split('/')[0];
    return `${year}-${month}-${day}`;
  }

  static getPriority = (todo) => {
    return todo.priority;
  };
}
