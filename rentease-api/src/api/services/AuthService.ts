import bcrypt from "bcrypt";
import UserRepository from "../../repositories/UserRepository.js";
import { AlreadyRegisteredException } from "../../utils/exceptions/AlreadyRegistered.js";
import { CreateUserDTO } from "../dtos/UserDTO.js";
import { TokenDTO } from "../dtos/TokenDTO.js";
import { JwtLocalService } from "./JwtLocalService.js";

export class AuthService {
  private userRepository: UserRepository;
  private jwtService: JwtLocalService;

  constructor() {
    this.userRepository = new UserRepository();
    this.jwtService = new JwtLocalService();
  }

  public async register(user: CreateUserDTO): Promise<TokenDTO> {
    const userExists = await this.userRepository.exists(user.username);

    if (userExists) {
      throw new AlreadyRegisteredException();
    }

    const hashedPassword = await this.hashPassword(user.password);

    const secureUser = await this.userRepository.save({
      ...user,
      password: hashedPassword,
    });

    return this.getAccessToken(secureUser.id);
  }

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  private getAccessToken(userId: number) {
    const payload = { sub: userId };
    return {
      accessToken: this.jwtService.generateToken(payload),
    };
  }
}
