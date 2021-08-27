import { Router, Response, Request, NextFunction } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ isLogin: true });
});

export default router;
