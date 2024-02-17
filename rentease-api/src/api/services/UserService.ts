import { SequelizeUser } from "../../database/models/User.js";
import UserMapper from "../../mappers/UserMapper.js";
import UserRepository from "../../repositories/UserRepository.js";
import { UnauthorizedException } from "../../utils/exceptions/UnauthorizedException.js";
import { UpdateUserDTO, UserDTO } from "../dtos/UserDTO.js";

export class UserService {
  private userRepository: UserRepository;
  private userMapper: UserMapper;

  constructor() {
    this.userRepository = new UserRepository();
    this.userMapper = new UserMapper();
  }

  public async findById(userId: number): Promise<UserDTO> {
    const exists = await this.userRepository.exists(userId.toString());
    if (!exists) {
      throw new UnauthorizedException("User not found");
    }
    const user = await this.userRepository.findById(userId);
    return this.userMapper.toDTO(user);
  }

  public async updateById(
    userId: number,
    user: UpdateUserDTO
  ): Promise<SequelizeUser> {
    return this.userRepository.updateById(userId, user);
  }

  public async deleteById(userId: number): Promise<void> {
    return this.userRepository.deleteById(userId);
  }
}
