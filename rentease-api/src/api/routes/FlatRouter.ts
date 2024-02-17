import { Router } from "express";
import { jwtTokenVerify } from "../middlewares/jwtTokenVerify.js";
import { FlatController } from "../controllers/FlatController.js";
import { FlatValidator } from "../validators/FlatValidator.js";
import { validationHandler } from "../middlewares/validationHandler.js";

const router = Router();
const flatController = new FlatController();

router.get("/all", jwtTokenVerify, flatController.getAll);
router.post(
  "/create",
  FlatValidator.validateCreation,
  validationHandler,
  jwtTokenVerify,
  flatController.create
);
router.put(
  "/:id",
  FlatValidator.validateUpdate,
  validationHandler,
  jwtTokenVerify,
  flatController.update
);

export { router as flatRouter };
