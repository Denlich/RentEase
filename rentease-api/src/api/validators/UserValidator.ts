import { body } from "express-validator";

export class UserValidator {
  private constructor() {}

  static validateUpdate = [
    body("firstName")
      .isString()
      .trim()
      .isLength({ min: 2, max: 20 })
      .withMessage("First name must be between 2 and 20 characters"),
    body("lastName")
      .isString()
      .trim()
      .isLength({ min: 4, max: 30 })
      .withMessage("Last name must be between 4 and 30 characters"),
    body("username")
      .isString()
      .isLength({ min: 3, max: 30 })
      .withMessage("Username must be between 3 and 30 characters"),
  ];
}
