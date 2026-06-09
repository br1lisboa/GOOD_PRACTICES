import type { User } from "../domain/User";
import type { UserRepository } from "../domain/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private readonly FAKE_USERS = [
    {
      id: 1,
      name: "Pablo Escobar",
      email: "pablito@emai.com",
    },
    {
      id: 2,
      name: "Cristian Castro",
      email: "cristian@emai.com",
    },
  ] satisfies User[];

  getAll(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.FAKE_USERS), 20000);
    });
  }
}
