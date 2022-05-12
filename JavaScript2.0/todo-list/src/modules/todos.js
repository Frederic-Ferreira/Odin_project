let todoList = [];

const createTodo = (title, date, priority) => {
  return {
    title,
    date,
    priority,
  };
};

const getTitle = (todo) => {
  return todo.title;
};

const getFormattedDate = (todoDate) => {
  const year = todoDate.split('-')[0];
  const month = todoDate.split('-')[1];
  const day = todoDate.split('-')[2];
  return `${day}/${month}/${year}`;
};

const getPriority = (todo) => {
  return todo.priority;
};

export { todoList, getTitle, getFormattedDate, getPriority };
