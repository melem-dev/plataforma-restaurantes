import { createContext, useEffect, useState } from "react";
import { ws } from "../services";
import { toast } from "react-toastify";

export const NotificationsContext = createContext();

export function NotificationsProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const global = {};

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    ws.emit("authenticate", { token });

    ws.on("authenticated", () => setLoading(false));

    ws.on("notify", ({ body, type }) => toast[type](body));
  }, [ws]);

  return (
    <NotificationsContext.Provider value={global}>
      {loading ? <h1>Carregando 2</h1> : children}
    </NotificationsContext.Provider>
  );
}
