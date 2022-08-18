import { Router } from "express";
import * as account from "../controllers/account.controller";

const router = Router();

router.post("/profile", account.profile);
router.post("/info", account.info);

export default router;
