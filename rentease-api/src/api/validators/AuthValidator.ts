import { body } from "express-validator";

export class AuthValidator {
  private constructor() {}

  static validateRegister = [
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
    body("password")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be between 6 and 20 characters"),
  ];

  static validateLogin = [
    body("username")
      .isLength({ min: 3, max: 30 })
      .withMessage("Username must be between 3 and 30 characters"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be between 6 and 20 characters"),
  ];
}
