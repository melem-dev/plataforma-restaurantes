import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api, ws } from "../../services";
import { Container } from "../../pages/styles";
import Skeleton from "../loading/page";
import OrderCard from "../card/order";

function Table({ data: { data, count } }) {
  return (
    <>
      <Container>
        <div style={{ backgroundColor: "white", padding: "20px" }}>
          <h1>Pedidos</h1>
          {data.map((el, i) => (
            <OrderCard number={count - i} order={el} key={i} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default function () {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState({ count: 0, data: [] });

  async function fetchData() {
    try {
    } catch (error) {}
    const token = localStorage.getItem("access_token");
    api.defaults.headers.authorization = "Bearer " + token;
    const { data: response } = await api.get("/orders/list");
    if (!response.count) return;
    const sorted = response.data.sort((a, b) => b.in - a.in);
    setOrders({ count: response.count, data: sorted });
    return;
  }

  useEffect(() => {
    fetchData().finally(() => setLoading(false));

    ws.on("confirm-order", () => {
      fetchData();
    });

    return () => setLoading(false);
  }, [ws]);

  return <>{loading ? <Skeleton /> : <Table data={orders} />}</>;
}
