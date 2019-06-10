import Server from "./server/server";

const server = Server.init(3500);

server.start(() => {
  console.log("Server on: 3500");
});
