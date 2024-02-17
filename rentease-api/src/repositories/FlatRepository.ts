import { CreateFlatDTO, FlatDTO } from "../api/dtos/FlatDTO.js";
import { SequelizeFlat } from "../database/models/Flat.js";

export class FlatRepository {
  constructor() {}

  public async save(flat: CreateFlatDTO): Promise<SequelizeFlat> {
    const flatSequelizeInstance = await SequelizeFlat.create(flat);
    return flatSequelizeInstance;
  }
}
