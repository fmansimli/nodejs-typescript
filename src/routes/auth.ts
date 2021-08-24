import { Router, IRouter, Response, Request, NextFunction } from "express";

const router: IRouter = Router();

router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: "ok", isLogin: true });
});

export default router;
