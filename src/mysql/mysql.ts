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

  static ejecutarQuery(query: string, callback: Function) {
    this.instance.cnn.query(query, (err, results: Object[], fields) => {
      if (err) {
        console.log("Error en query");
        console.log(err.message);
        return callback(err);
      }

      if (results.length === 0) {
        callback("el registro solicitado no existe");
      } else {
        callback(null, results);
      }
    });
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
