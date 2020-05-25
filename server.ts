import { pogo, status } from "./deps.ts";
import { apiTodos } from "./api/todos/todoService.ts";

const server = pogo.server({ hostname: "0.0.0.0", port: 8080 });

server.router.get("/", async () => {
  return apiTodos.getTodos().then((todos) => todos);
});

server.router.get("/todos/{todoId}", async (request, h) => {
  const todoId = parseInt(request.params.todoId);
  if (!todoId) {
    return h.response().code(status.BadRequest);
  }
  return apiTodos.getTodo(todoId).then((todo) => todo);
});

server.start();
console.log(
  `Listening live on ${server._config.hostname}:${server._config.port}`,
);
