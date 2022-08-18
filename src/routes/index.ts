import { Router } from "express";
import authRouter from "./auth";
import accounrRouter from "./account";

const router = Router();

router.use("/auth", authRouter);
router.use("/account", accounrRouter);

export default router;
