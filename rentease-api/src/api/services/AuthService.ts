import bcrypt from "bcrypt";
import UserRepository from "../../repositories/UserRepository.js";
import { AlreadyRegisteredException } from "../../utils/exceptions/AlreadyRegistered.js";
import { CreateUserDTO, LoginUserDTO } from "../dtos/UserDTO.js";
import { TokenDTO } from "../dtos/TokenDTO.js";
import { JwtLocalService } from "./JwtLocalService.js";
import { UnauthorizedException } from "../../utils/exceptions/UnauthorizedException.js";
import UserMapper from "../../mappers/UserMapper.js";

export class AuthService {
  private userRepository: UserRepository;
  private jwtService: JwtLocalService;
  private userMapper: UserMapper;

  constructor() {
    this.userRepository = new UserRepository();
    this.jwtService = new JwtLocalService();
    this.userMapper = new UserMapper();
  }

  public async register(user: CreateUserDTO): Promise<TokenDTO> {
    const userExists = await this.userRepository.exists(user.username);

    if (userExists) {
      throw new AlreadyRegisteredException(user.username);
    }

    const hashedPassword = await this.hashPassword(user.password);

    const secureUser = await this.userRepository.save({
      ...user,
      password: hashedPassword,
    });

    return this.getAccessToken(secureUser.id);
  }

  private async validateUser(username: string, password: string) {
    const user = await this.userRepository.findByUsername(username);

    if (!user) throw new UnauthorizedException("Username is wrong");

    const comparedPasswords = await bcrypt.compare(password, user.password);

    if (!comparedPasswords)
      throw new UnauthorizedException("Password is wrong");

    return this.userMapper.toDTO(user);
  }

  public async login(user: LoginUserDTO): Promise<TokenDTO> {
    const userDTO = await this.validateUser(user.username, user.password);
    return this.getAccessToken(userDTO.id);
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

  public async getMe(userId: number) {
    const user = await this.userRepository.findById(userId);
    if (user) return this.userMapper.toDTO(user);
    throw new UnauthorizedException("Unauthorized");
  }
}
