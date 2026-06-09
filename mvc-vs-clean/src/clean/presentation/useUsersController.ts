import { useEffect, useState } from "react";
import type { User } from "../domain/User";
import { useCase } from "./composition";

type UseUsersController = {
  users: User[];
  isLoading: boolean;
};

export function useUsersController(): UseUsersController {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      setIsLoading(true);
      try {
        const data = await useCase.execute();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, []);

  return {
    users,
    isLoading,
  };
}
