import type { User } from "../domain/User";

type UserList = {
  users: User[];
  isLoading: boolean;
};

export const UserList = ({ users, isLoading }: UserList) => {
  if (isLoading) return <p>Cargando CLEAN ...</p>;

  return (
    <section>
      <ol>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            <p>
              {name} - {email}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
