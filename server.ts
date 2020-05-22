import pogo from "https://deno.land/x/pogo/main.ts";
import { apiTodos } from "./todoApi.ts";

const server = pogo.server({ port: 3000 });

server.router.get("/", async () => {
  return apiTodos.getTodos().then((todos) => todos);
});

server.start();
console.log(`Listening to port: ${server._config.port}`);
