import { HttpException } from "./HttpException.js";

export class UnauthorizedException extends HttpException {
  constructor(message: string) {
    super(404, message);
  }
}
