import { Todo } from "./todoModel.ts"

function formatTodo(todo: any): Todo {
  return { id: todo.id, title: todo.title, completed: todo.completed, userId: todo.userId };
}

class TodoService {
  async getTodos(): Promise<Todo[]> {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => todos.map((todo: any) => formatTodo(todo)));
  }

  async getTodo(todoId: number): Promise<Todo> {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((todo: any) => formatTodo(todo));
  }
}

export const apiTodos = new TodoService();