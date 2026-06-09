import { GetUsersUseCase } from "../application/GetUsersUseCase";
import { InMemoryUserRepository } from "../infrastructure/InMemoryUserRepository";

const repo = new InMemoryUserRepository();
export const useCase = new GetUsersUseCase(repo);
