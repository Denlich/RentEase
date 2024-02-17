import { Op } from "sequelize";
import { CreateUserDTO } from "../api/dtos/UserDTO.js";
import { SequelizeUser } from "../database/models/User.js";

class UserRepository {
  constructor() {}

  public async exists(userParam: string): Promise<boolean> {
    const userSequelizeInstance = await SequelizeUser.findOne({
      where: { [Op.or]: [{ id: userParam }, { username: userParam }] },
    });
    return !!userSequelizeInstance === true;
  }

  public async save(user: CreateUserDTO): Promise<SequelizeUser> {
    const userSequelizeInstance = await SequelizeUser.create(user);
    return userSequelizeInstance;
  }

  public async findById(userId: string): Promise<SequelizeUser> {
    const userSequelizeInstance = await SequelizeUser.findOne({
      where: { id: userId },
    });
    return userSequelizeInstance!;
  }
}

export default UserRepository;
