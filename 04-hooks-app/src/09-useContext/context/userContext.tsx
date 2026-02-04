import { createContext, useState } from "react";
import { users, type User } from "../data/user-data.mock";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

interface UserContextProps {
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;
  login: (userId: number) => boolean;
  logout: () => void;
}

const userIdKey = "userId";

function getInitialAuthState(): { authStatus: AuthStatus; user: User | null } {
  const storedUserId = localStorage.getItem(userIdKey);
  if (storedUserId) {
    const found = users.find((u) => u.id === Number(storedUserId));
    if (found) {
      return { authStatus: "authenticated", user: found };
    }
  }
  return { authStatus: "not-authenticated", user: null };
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [{ authStatus, user }, setAuthState] = useState(getInitialAuthState);

  const handleLogin = (userId: number) => {
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser) return false;
    setAuthState({ authStatus: "authenticated", user: foundUser });
    localStorage.setItem(userIdKey, foundUser.id.toString());
    return true;
  };

  const handleLogout = () => {
    setAuthState({ authStatus: "not-authenticated", user: null });
    localStorage.removeItem(userIdKey);
  };

  return (
    <UserContext
      value={{
        authStatus,
        user,
        isAuthenticated: authStatus === "authenticated",
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
