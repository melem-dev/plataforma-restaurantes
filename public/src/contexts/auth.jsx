import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function SignIn({ username, password }) {
    try {
      const { data } = await api.get(`/login/${username}/${password}`);

      if (data) localStorage.setItem("access_token", data);

      setAuthenticated(true);

      return true;
    } catch (error) {
      setAuthenticated(false);

      console.log(error.response?.status);
    }
  }

  async function SignOut() {
    localStorage.removeItem("access_token");
    return setAuthenticated(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get(`/auth/${token}`)
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  const globalValues = {
    authenticated,
    SignIn,
    SignOut,
  };

  return (
    <AuthContext.Provider value={globalValues}>
      {loading ? <h1>Carregando 1</h1> : children}
    </AuthContext.Provider>
  );
}
