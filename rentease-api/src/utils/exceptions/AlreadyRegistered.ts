import { HttpException } from "./HttpException.js";

export class AlreadyRegisteredException extends HttpException {
  constructor() {
    super(404, "User already registered");
  }
}
