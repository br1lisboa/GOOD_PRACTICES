import "./App.css";
import { UserPage } from "./clean/presentation/UserPage";
import { useUserController } from "./mvc/controller/useUserController";
import { UserList } from "./mvc/view/UserList";

function App() {
  const { isLoadingUsers, users } = useUserController();

  return (
    <>
      <UserList users={users} isLoading={isLoadingUsers} />

      <p>--------------------</p>

      <UserPage />
    </>
  );
}

export default App;
