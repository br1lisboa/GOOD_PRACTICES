import { UserList } from "./UserList";
import { useUsersController } from "./useUsersController";

export const UserPage = () => {
  const { users, isLoading } = useUsersController();

  return <UserList users={users} isLoading={isLoading} />;
};
