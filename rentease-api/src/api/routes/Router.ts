import { Router } from "express";
import { authRouter } from "./AuthRouter.js";
import { userRouter } from "./UserRouter.js";
import { UserValidator } from "../validators/UserValidator.js";
import { validationHandler } from "../middlewares/validationHandler.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
