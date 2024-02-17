import { CreateUserDTO } from "../api/dtos/UserDTO.js";
import { SequelizeUser } from "../database/models/User.js";

class UserRepository {
  constructor() {}

  public async exists(username: string): Promise<boolean> {
    const userSequelizeInstance = await SequelizeUser.findOne({
      where: { username },
    });
    return !!userSequelizeInstance === true;
  }

  public async findByUsername(username: string): Promise<SequelizeUser> {
    const userSequelizeInstance = await SequelizeUser.findOne({
      where: { username },
    });
    return userSequelizeInstance!;
  }

  public async save(user: CreateUserDTO): Promise<SequelizeUser> {
    const userSequelizeInstance = await SequelizeUser.create(user);
    return userSequelizeInstance;
  }

  public async findById(userId: number): Promise<SequelizeUser> {
    const userSequelizeInstance = await SequelizeUser.findOne({
      where: { id: userId },
    });
    return userSequelizeInstance!;
  }
}

export default UserRepository;
