export default class storage {
  static storeTodo(todo) {
    localStorage.setItem(todo.title, this.stringify(todo));
  }

  static storeProject(project) {
    localStorage.setItem(project, project);
  }

  static removeData(item) {
    localStorage.removeItem(item);
  }

  static stringify(obj) {
    return JSON.stringify(obj);
  }

  static parse(obj) {
    return JSON.parse(obj);
  }
}
