import { CreateFlatDTO, FlatDTO, UpdateFlatDTO } from "../api/dtos/FlatDTO.js";
import { SequelizeFlat } from "../database/models/Flat.js";

export class FlatRepository {
  constructor() {}

  public async getAll(): Promise<FlatDTO[]> {
    const flats = await SequelizeFlat.findAll();
    return flats;
  }

  public async save(flat: CreateFlatDTO): Promise<SequelizeFlat> {
    const flatSequelizeInstance = await SequelizeFlat.create(flat);
    return flatSequelizeInstance;
  }

  public async update(
    flatId: number,
    userId: number,
    flat: UpdateFlatDTO
  ): Promise<SequelizeFlat> {
    const flatSequelizeInstance = await SequelizeFlat.findOne({
      where: { id: flatId, userId },
    });

    if (!flatSequelizeInstance) {
      throw new Error("Flat not found");
    }

    await flatSequelizeInstance.update(flat);
    return flatSequelizeInstance;
  }
}
