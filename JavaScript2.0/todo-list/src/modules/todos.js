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

  static modifyTodo(index, title, date, priority) {
    const todo = this.todoList[index];
    todo.title = title;
    todo.date = date;
    todo.priority = priority;
  }

  static deleteTodo(index) {
    console.log(this.todoList);
    this.todoList.splice(index, 1);
    console.log(this.todoList);
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

  static getIndex = (node) => {
    return node.dataset.index;
  };

  static toggleCheck(btn, li) {
    btn.classList.toggle('checked--btn');
    li.classList.toggle('checked--list');
  }
}
