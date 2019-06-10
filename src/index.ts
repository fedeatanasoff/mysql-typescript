import Server from "./server/server";
import router from "./router/router";
import MySQL from "./mysql/mysql";

const server = Server.init(3500);
server.app.use(router);

const mysql = new MySQL();

server.start(() => {
  console.log("Server on: 3500");
});