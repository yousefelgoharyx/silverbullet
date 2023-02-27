import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { httpAgent } from "../utils/axios";

// create auth provider with react context
export type UserForm = {
  username: string;
  password: string;
};
export type User = {
  username: string;
  accessToken: string;
  refreshToken: string;
};
type AuthContextType = {
  user: User | null;
  login: (user: UserForm) => void;
  logout: () => void;
  initAuth: () => void;
};
export const AuthContext = createContext<AuthContextType>(null);

// create auth provider with react context
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (user: UserForm) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await httpAgent.post<Omit<User, "username">>(
          "/auth/login",
          user
        );
        await AsyncStorage.setItem(
          "user",
          JSON.stringify({
            ...data,
            username: user.username,
          })
        );
        setUser({
          ...data,
          username: user.username,
        });

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  async function initAuth() {
    const user = await AsyncStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, initAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
