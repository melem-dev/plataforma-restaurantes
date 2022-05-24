import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts";
import Aside from "../../components/aside/dashboard";

export default function () {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to="/login" />;

  return (
    <>
      <Aside />
      <Outlet />
    </>
  );
}
