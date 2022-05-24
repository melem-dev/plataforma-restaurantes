import {
  OrderContainer,
  OrderBorderDetails,
  OrderButton,
  OrderTitle,
} from "./styles";
import { useState } from "react";

const toBrl = (amount) =>
  Number(amount).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

export default function ({ order, number }) {
  const [open, setOpen] = useState(false);

  const handleState = () => setOpen((prev) => !prev);

  return (
    <OrderContainer status={order.status} opened={open}>
      <OrderTitle>
        <p>
          Pedido Nº <b>{number}</b>
        </p>
        <p>
          Total: <b>{toBrl(order.total)}</b>
        </p>
        <p>
          Entrada:{" "}
          <b>{new Date(order.in).toLocaleString("pt-br").split(" ")[1]}</b>
        </p>
        <p>
          Responsável: <b>{order.responsable}</b>
        </p>
      </OrderTitle>

      <OrderBorderDetails>
        {order.items.map((item, j) => (
          <div key={j}>
            <p>
              {item.quantity} - {item.title}
            </p>
          </div>
        ))}
      </OrderBorderDetails>

      <OrderButton onClick={handleState}>
        {open ? "Ocultar" : "Ver detalhes"}
      </OrderButton>
    </OrderContainer>
  );
}
