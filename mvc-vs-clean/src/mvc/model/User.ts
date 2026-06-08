export type User = {
  id: number;
  name: string;
  email: string;
};

const FAKE_USERS = [
  {
    id: 1,
    name: "Pablo Escobar",
    email: "pablito@emai.com",
  },
  {
    id: 2,
    name: "Cristian Castro",
    email: "cristian@emai.com",
  },
] satisfies User[];

export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(FAKE_USERS), 2000);
  });
}
