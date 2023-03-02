import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { LoginSchema } from "../components/Login/LoginForm";
import { SignupSchema } from "../components/Signup/SignupForm";
import { httpAgent } from "../utils/axios";

export type User = {
  username: string;
  accessToken: string;
  refreshToken: string;
};
type AuthContextType = {
  user: User | null;
  login: (user: LoginSchema) => void;
  signup: (user: SignupSchema) => void;
  logout: () => void;
  initAuth: () => void;
};

// @ts-ignore
export const AuthContext = createContext<AuthContextType>(null);

// create auth provider with react context
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (user: LoginSchema) => {
    const response = await httpAgent.post<Omit<User, "username">>("/auth/login", user);

    const newUser = {
      ...response.data,
      username: user.username,
    };
    await AsyncStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const signup = async (user: SignupSchema) => {
    await httpAgent.post("/auth/signup", user);
    const loginCredentials = {
      username: user.username,
      password: user.password,
    };
    await login(loginCredentials);
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
    <AuthContext.Provider value={{ user, login, logout, initAuth, signup }}>
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
