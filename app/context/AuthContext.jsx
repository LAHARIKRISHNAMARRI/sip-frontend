"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { setToken, removeToken } from "@/utils/cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (data) => {
    setToken(data.token);
    setUser(data.user);
    router.push("/dashboard/sip");
  };

  const logout = () => {
    removeToken();
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);