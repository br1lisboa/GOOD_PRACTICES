import type { User } from "./User";

export interface UserRepository {
  getAll(): Promise<User[]>;
}
