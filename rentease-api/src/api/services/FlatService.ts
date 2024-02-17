import { FlatRepository } from "../../repositories/FlatRepository.js";
import { UnauthorizedException } from "../../utils/exceptions/UnauthorizedException.js";
import { CreateFlatDTO, UpdateFlatDTO } from "../dtos/FlatDTO.js";

export class FlatService {
  private flatRepository: FlatRepository;

  constructor() {
    this.flatRepository = new FlatRepository();
  }

  public async getAll() {
    return this.flatRepository.getAll();
  }

  public async getById(flatId: number, userId: number) {
    const flatExists = await this.flatRepository.exists(flatId, userId);

    if (!flatExists) {
      throw new UnauthorizedException("Flat not found");
    }

    const flat = await this.flatRepository.findFlatById(flatId);

    return flat;
  }

  public async create(userId: number, flat: CreateFlatDTO) {
    return this.flatRepository.save({ ...flat, userId });
  }

  public async update(flatId: number, userId: number, flat: UpdateFlatDTO) {
    const flatExists = await this.flatRepository.exists(flatId, userId);

    if (!flatExists) {
      throw new UnauthorizedException("Flat not found");
    }

    return this.flatRepository.update(flatId, userId, flat);
  }

  public async delete(flatId: number, userId: number) {
    const flatExists = await this.flatRepository.exists(flatId, userId);

    if (!flatExists) {
      throw new UnauthorizedException("Flat not found");
    }

    return this.flatRepository.delete(flatId, userId);
  }
}
