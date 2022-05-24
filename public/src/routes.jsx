import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts";

import DashboardOutlet from "./pages/dashboard";

import DashboardIndex from "./pages/dashboard/main";
import DashboardProducts from "./pages/dashboard/products";
import DashboardSales from "./pages/dashboard/sales";

import Login from "./pages/login";

const Redirect = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to="/login" />;

  return <Navigate to="/dashboard" />;
};

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<DashboardOutlet />}>
          <Route path="" element={<DashboardIndex />} />
          <Route path="orders" element={<DashboardProducts />} />
          <Route path="products" element={<DashboardSales />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}
