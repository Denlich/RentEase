import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/AuthService.js";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userToken = await this.authService.register(req.body);
      return res.status(200).json(userToken);
    } catch (error) {
      next(error);
    }
  };
}
