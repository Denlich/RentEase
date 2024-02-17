import { HttpException } from "./HttpException.js";

export class AlreadyRegisteredException extends HttpException {
  constructor(username: string) {
    super(404, `User with ${username} username already registered`);
  }
}
