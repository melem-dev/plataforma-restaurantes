import { useState, useEffect, useContext } from "react";
import { api } from "../../../services";
import { DataContext, DataProvider } from "../../../contexts";

import Skeleton from "./skeleton";
import Employee from "./employee";
import Admin from "./admin";
import Public from "./public";
import Error from "./error";

const UserInterfaces = {
  loading: <Skeleton />,
  employee: <Employee />,
  admin: <Admin />,
  public: <Public />,
  error: <Error />,
};

function Handler() {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    api.defaults.headers.authorization = "Bearer " + token;
    api
      .get("/profile")
      .then(({ data }) => setData((prev) => ({ ...prev, ...data })))
      .catch(() => setData((prev) => ({ ...prev, userType: "error" })));
  }, []);

  return UserInterfaces[data.userType];
}

export default function () {
  return (
    <>
      <DataProvider>
        <Handler />
      </DataProvider>
    </>
  );
}
