import { NextFunction, Request, Response } from "express";
import { FlatService } from "../services/FlatService.js";

export class FlatController {
  private flatService: FlatService;

  constructor() {
    this.flatService = new FlatService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const flats = await this.flatService.getAll();
      res.status(200).json(flats);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.id;
    const body = req.body;

    try {
      const flat = await this.flatService.create(parseInt(userId), body);
      res.status(201).json(flat);
    } catch (error) {
      next(error);
    }
  };
}
