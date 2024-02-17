import { Router } from "express";
import { AuthController } from "../contollers/AuthController.js";
import { AuthValidator } from "../validators/AuthValidator.js";
import { validationHandler } from "../middlewares/validationHandler.js";

const router = Router();
const authController = new AuthController();

router.post(
  "/register",
  AuthValidator.validateRegister,
  validationHandler,
  authController.register
);

export { router as authRouter };
