import { pogo } from "./deps.ts";
import { apiTodos } from "./todoApi.ts";

const server = pogo.server({ hostname: '0.0.0.0', port: 8080 });

server.router.get("/", async () => {
  return apiTodos.getTodos().then((todos) => todos);
});

server.start();
console.log(`Listening live on ${server._config.hostname}:${server._config.port}`);
