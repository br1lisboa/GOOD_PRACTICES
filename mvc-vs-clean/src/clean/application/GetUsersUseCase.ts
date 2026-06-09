import type { User } from "../domain/User";
import type { UserRepository } from "../domain/UserRepository";

export class GetUsersUseCase {
  private readonly repo: UserRepository;

  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  async execute(): Promise<User[]> {
    return this.repo.getAll();
  }
}
