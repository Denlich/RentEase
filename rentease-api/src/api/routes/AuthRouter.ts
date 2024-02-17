import { Router } from "express";
import { AuthController } from "../contollers/AuthController.js";
import { AuthValidator } from "../validators/AuthValidator.js";
import { validationHandler } from "../middlewares/validationHandler.js";
import { jwtTokenVerify } from "../middlewares/jwtTokenVerify.js";

const router = Router();
const authController = new AuthController();

router.post(
  "/register",
  AuthValidator.validateRegister,
  validationHandler,
  authController.register
);

router.post(
  "/login",
  AuthValidator.validateLogin,
  validationHandler,
  authController.login
);

router.get("/me", jwtTokenVerify, authController.getMe);

export { router as authRouter };
