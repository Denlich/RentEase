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

  getById = async (req: Request, res: Response, next: NextFunction) => {
    const flatId = req.params.id;
    const userId = req.body.id;

    try {
      const flat = await this.flatService.getById(
        parseInt(flatId),
        parseInt(userId)
      );
      res.status(200).json(flat);
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

  update = async (req: Request, res: Response, next: NextFunction) => {
    const flatId = req.params.id;
    const userId = req.body.id;
    const body = req.body;

    try {
      const flat = await this.flatService.update(
        parseInt(flatId),
        parseInt(userId),
        body
      );
      res.status(200).json(flat);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    const flatId = req.params.id;
    const userId = req.body.id;

    try {
      await this.flatService.delete(parseInt(flatId), parseInt(userId));
      res.status(200).json({ message: "Flat deleted" });
    } catch (error) {
      next(error);
    }
  };
}
