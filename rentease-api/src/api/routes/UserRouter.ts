import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { jwtTokenVerify } from "../middlewares/jwtTokenVerify.js";
import { UserValidator } from "../validators/UserValidator.js";
import { validationHandler } from "../middlewares/validationHandler.js";

const router = Router();
const userController = new UserController();

router.get("/:userId", jwtTokenVerify, userController.findById);
router.put(
  "/:userId",
  jwtTokenVerify,
  UserValidator.validateUpdate,
  validationHandler,
  userController.updateById
);
router.delete("/:userId", jwtTokenVerify, userController.deleteById);

export { router as userRouter };
