import { useEffect, useState } from "react";
import { getUsers, type User } from "../model/User";

export const useUserController = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        const resp = await getUsers();
        setUsers(resp);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return {
    users,
    isLoadingUsers: isLoading,
    error,
  };
};
