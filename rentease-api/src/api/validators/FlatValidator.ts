import { body } from "express-validator";

export class FlatValidator {
  static validateCreation = [
    body("name").isString().isLength({ min: 5, max: 80 }).notEmpty(),
    body("description").isString().isLength({ min: 10, max: 120 }).notEmpty(),
    body("price").isNumeric().notEmpty(),
  ];

  static validateUpdate = [
    body("name").isString().isLength({ min: 5, max: 80 }).optional(),
    body("description").isString().isLength({ min: 10, max: 120 }).optional(),
    body("price").isNumeric().optional(),
  ];
}
