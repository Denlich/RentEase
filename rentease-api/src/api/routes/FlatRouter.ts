import { Router } from "express";
import { jwtTokenVerify } from "../middlewares/jwtTokenVerify.js";
import { FlatController } from "../controllers/FlatController.js";
import { FlatValidator } from "../validators/FlatValidator.js";
import { validationHandler } from "../middlewares/validationHandler.js";

const router = Router();
const flatController = new FlatController();

router.post(
  "/create",
  FlatValidator.validateCreation,
  validationHandler,
  jwtTokenVerify,
  flatController.create
);

export { router as flatRouter };
