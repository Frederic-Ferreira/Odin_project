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

  static modifyTodo(todoNode) {
    console.log(todoNode);
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
