import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService.js";
import UserMapper from "../../mappers/UserMapper.js";

export class UserController {
  private userService: UserService;
  private userMapper: UserMapper;

  constructor() {
    this.userService = new UserService();
    this.userMapper = new UserMapper();
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    try {
      const user = await this.userService.findById(parseInt(userId));
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  updateById = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    const user = req.body;

    try {
      await this.userService.updateById(parseInt(userId), user);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  deleteById = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    try {
      await this.userService.deleteById(parseInt(userId));
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
