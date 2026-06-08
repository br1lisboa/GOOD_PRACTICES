import { useEffect, useState } from "react";
import "./App.css";
import { UserList } from "./mvc/view/UserList";
import { getUsers, type User } from "./mvc/model/User";

function App() {
  const [users, setUsers] = useState<User[] | []>([]);

  useEffect(() => {
    async function fetchUsers() {
      const resp = await getUsers();
      setUsers(resp);
    }

    fetchUsers();
  }, []);

  if (users.length === 0) return <p>Cargando...</p>;

  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
