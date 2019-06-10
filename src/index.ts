import Server from "./server/server";
import router from "./router/router";
import MySQL from "./mysql/mysql";

const server = Server.init(3500);
// rutas
server.app.use(router);

// const mysql = new MySQL();

// singleton
MySQL.instance;

// servidor
server.start(() => {
  console.log("Server on: 3500");
});
