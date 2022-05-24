import { useState, useContext } from "react";
import { Aside, AsideButton, AsideLink } from "./style";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";

const paths = [
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/dashboard/products",
    label: "Produtos",
  },
  {
    path: "/dashboard/orders",
    label: "Pedidos",
  },
];

export default function () {
  const [open, setOpen] = useState(false);
  const { SignOut } = useContext(AuthContext);
  const nav = useNavigate();

  async function handleLogout() {
    await SignOut();

    return nav("/login");
  }

  return (
    <Aside
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...{ open }}
    >
      <div>
        {paths.map((el, i) => (
          <AsideLink to={el.path} key={i}>
            {el.label}
          </AsideLink>
        ))}
      </div>

      <AsideButton type="button" onClick={handleLogout}>
        Sair
      </AsideButton>
    </Aside>
  );
}
