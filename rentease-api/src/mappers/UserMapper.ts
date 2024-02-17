import { SequelizeUser } from "../database/models/User.js";
import { UserDTO } from "../api/dtos/UserDTO.js";

class UserMapper {
  constructor() {}

  public toDTO(userSequelizeInstance: SequelizeUser): UserDTO {
    return {
      id: userSequelizeInstance.id,
      firstName: userSequelizeInstance.firstName,
      lastName: userSequelizeInstance.lastName,
      username: userSequelizeInstance.username,
    };
  }
}

export default UserMapper;
