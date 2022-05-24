import { parsebrl } from "../../utils";
import { useEffect, useState } from "react";
import { ContainerTitle, CardPlate } from "./styles";
import { Button } from "../form/style";

const initialFields = {
  total: 0,
  itens: 0,
};

export default function ({ data }) {
  const [order, setOrder] = useState(initialFields);

  function getTotal() {
    let total = 0;

    Object.values(data).forEach((el) => (total += el.price * el.quantity));

    setOrder((prev) => ({ ...prev, total, itens: Object.keys(data).length }));
  }

  useEffect(getTotal, [data]);

  return (
    <>
      {order.itens >= 1 && (
        <>
          <ContainerTitle>Pedido</ContainerTitle>
          <CardPlate>
            <div>
              <p>Total do pedido: {parsebrl(order.total)}</p>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button>Finalizar</Button>
            </div>
          </CardPlate>
        </>
      )}
    </>
  );
}
