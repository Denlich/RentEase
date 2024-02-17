import { CreateFlatDTO, FlatDTO, UpdateFlatDTO } from "../api/dtos/FlatDTO.js";
import { SequelizeFlat } from "../database/models/Flat.js";

export class FlatRepository {
  constructor() {}

  public async exists(flatId: number, userId: number): Promise<boolean> {
    const flat = await SequelizeFlat.findOne({ where: { id: flatId, userId } });
    return !!flat;
  }

  public async getAll(): Promise<FlatDTO[]> {
    const flats = await SequelizeFlat.findAll();
    return flats;
  }

  public async findFlatById(id: number): Promise<FlatDTO | null> {
    const flat = await SequelizeFlat.findByPk(id);
    return flat;
  }

  public async save(flat: CreateFlatDTO): Promise<SequelizeFlat> {
    const flatSequelizeInstance = await SequelizeFlat.create(flat);
    return flatSequelizeInstance;
  }

  public async update(
    flatId: number,
    userId: number,
    flat: UpdateFlatDTO
  ): Promise<SequelizeFlat | null> {
    const flatSequelizeInstance = await SequelizeFlat.findOne({
      where: { id: flatId, userId },
    });

    await flatSequelizeInstance!.update(flat);
    return flatSequelizeInstance;
  }

  public async delete(flatId: number, userId: number): Promise<void> {
    const flatSequelizeInstance = await SequelizeFlat.findOne({
      where: { id: flatId, userId },
    });

    await flatSequelizeInstance!.destroy();
  }
}
