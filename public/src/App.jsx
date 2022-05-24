import { useEffect } from "react";
import { AuthProvider, NotificationsProvider } from "./contexts";
import Routes from "./routes";
import { ws } from "./services";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";

export default function () {
  return (
    <>
      <AuthProvider>
        <NotificationsProvider>
          <ToastContainer />
          <Routes />
        </NotificationsProvider>
      </AuthProvider>
    </>
  );
}
