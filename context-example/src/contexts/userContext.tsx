import { createContext, useState } from "react";

interface UserContextProps {
  nome: string;
  loginName: string;
  save: (name: string) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export default function UserContextProvider({ children }: any) {
  const [loginName, setLoginName] = useState<string>("");
  const contextValues: UserContextProps = { 
    nome: "João", 
    loginName: loginName, 
    save: saveLoginUserToCache 
  };

  function saveLoginUserToCache(name: string) {
    if (name !== "") {
      setLoginName(name);
    }
  }

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}