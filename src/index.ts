import Server from "./server/server";
import router from "./router/router";

const server = Server.init(3500);
server.app.use(router);

server.start(() => {
  console.log("Server on: 3500");
});
