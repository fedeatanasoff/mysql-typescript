import { Router, Request, Response } from "express";
import MySQL from "../mysql/mysql";

const router = Router();

router.get("/perros", (req: Request, res: Response) => {
  const query = `SELECT * FROM perros`;

  MySQL.ejecutarQuery(query, (err: any, perros: Object[]) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err
      });
    } else {
      res.json({
        ok: true,
        perros
      });
    }
  });
});

router.get("/perros/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const escapeID = MySQL.instance.cnn.escape(id);

  const query = `SELECT * FROM perros where id= ${escapeID}`;

  MySQL.ejecutarQuery(query, (err: any, perro: Object[]) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err
      });
    } else {
      res.json({
        ok: true,
        perro: perro[0]
      });
    }
  });
});

export default router;
