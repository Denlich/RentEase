export interface UserDTO {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

export interface CreateUserDTO {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}
