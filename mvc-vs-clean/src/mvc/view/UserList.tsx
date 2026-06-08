import type { User } from "../model/User";

type UserListProps = {
  users: User[];
};
export const UserList = ({ users }: UserListProps) => {
  return users.map(({ id, name }) => <p key={id}>{name}</p>);
};
