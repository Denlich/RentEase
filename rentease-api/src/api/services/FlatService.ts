import { FlatRepository } from "../../repositories/FlatRepository.js";
import { CreateFlatDTO } from "../dtos/FlatDTO.js";

export class FlatService {
  private flatRepository: FlatRepository;

  constructor() {
    this.flatRepository = new FlatRepository();
  }

  public async getAll() {
    return this.flatRepository.getAll();
  }

  public async create(userId: number, flat: CreateFlatDTO) {
    return this.flatRepository.save({ ...flat, userId });
  }
}
