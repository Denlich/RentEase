import { Router } from "express";
import { authRouter } from "./AuthRouter.js";
import { userRouter } from "./UserRouter.js";
import { flatRouter } from "./FlatRouter.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/flats", flatRouter);

export default router;
