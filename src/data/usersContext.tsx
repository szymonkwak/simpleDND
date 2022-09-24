import { createContext, ReactElement, useState } from 'react';
import { users, Users } from '.';

interface UsersContext {
  usersOrder: Users[];
  setUsersOrder: React.Dispatch<React.SetStateAction<Users[]>>;
}
export const UsersContext = createContext<UsersContext>({ usersOrder: users } as UsersContext);

export const UserStateProvider = ({ children }: { children: ReactElement }) => {
  const [usersOrder, setUsersOrder] = useState(users);
  return <UsersContext.Provider value={{ usersOrder, setUsersOrder }}>{children} </UsersContext.Provider>;
};
