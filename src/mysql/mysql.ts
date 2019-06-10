import mysql = require("mysql");

export default class MySQL {
  private static _instance: MySQL;

  cnn: mysql.Connection;
  conectado: boolean = false;

  constructor() {
    console.log("Clase Mysql inicializada");
    this.cnn = mysql.createConnection({
      host: "localhost",
      user: "node_user",
      password: "123456",
      database: "node_db"
    });

    this.conectarDB();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private conectarDB() {
    this.cnn.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message);
        return;
      }

      this.conectado = true;
      console.log("Conexion a BD exitosa");
    });
  }
}
