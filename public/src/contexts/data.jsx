import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({ userType: "loading" });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
