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

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userToken = await this.authService.login(req.body);
      return res.status(200).json(userToken);
    } catch (error) {
      next(error);
    }
  };

  getMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.getMe(req.body.id);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
