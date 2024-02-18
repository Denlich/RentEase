import { client } from "../instance";
import { LoginBody } from "./types/LoginBody";
import { Token } from "../../../types/token";

class AuthAPI {
  async login(body: LoginBody) {
    const { data } = await client.post<Token>("/auth/login", body);
    return data;
  }
}

export default new AuthAPI();
