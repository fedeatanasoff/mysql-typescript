import { Router, Request, Response } from "express";

const router = Router();

router.get("/perros", (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: "todo ok"
  });
});

router.get("/perros/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({
    ok: true,
    message: "todo ok",
    id
  });
});

export default router;
