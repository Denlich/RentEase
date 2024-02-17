import { FlatRepository } from "../../repositories/FlatRepository.js";
import { CreateFlatDTO, UpdateFlatDTO } from "../dtos/FlatDTO.js";

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

  public async update(flatId: number, userId: number, flat: UpdateFlatDTO) {
    return this.flatRepository.update(flatId, userId, flat);
  }
}
