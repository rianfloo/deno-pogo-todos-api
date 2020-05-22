class Todo {
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
  }
}

function formatTodo(todo: any): Todo {
  return { title: todo.title, completed: todo.completed };
}

class TodoService {
  async getTodos(): Promise<Todo[]> {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => todos.map((todo: any) => formatTodo(todo)));
  }
}

export const apiTodos = new TodoService();
