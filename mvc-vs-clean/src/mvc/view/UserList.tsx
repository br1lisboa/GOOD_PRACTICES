import type { User } from "../model/User";

type UserListProps = {
  users: User[];
  isLoading: boolean;
};
export const UserList = ({ users, isLoading = false }: UserListProps) => {
  if (isLoading) return <p>Cargando...</p>;

  return (
    <section>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
