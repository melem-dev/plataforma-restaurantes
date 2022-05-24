import { useEffect, useState } from "react";
import { api } from "../../services";
import { v4 as uuid } from "uuid";
import { Container } from "../styles";

import ModalOrder from "../../components/modal/confirmOrder";
import DataTable from "../../components/card/cart";
import CartTable from "../../components/card/products";
import CartInfo from "../../components/card/info";

export default function () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const [orderDetails, setOrderDetails] = useState(false);
  const [modal, setModal] = useState(false);

  async function fetchData() {
    try {
      const { data } = await api.get("/products");

      if (!data.data) throw new Error("products not found");

      setProducts(data.data);
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  }

  function handleCart(index, add = true) {
    if (add) {
      const product = products[index];

      if (!product) return console.log("product not found");

      setCart((prev) => ({ ...prev, [uuid()]: { ...product, quantity: 1 } }));
    } else {
      setCart((prev) => {
        const newList = { ...prev };

        delete newList[index];

        return newList;
      });
    }
  }

  async function handleSubmit(ev) {
    ev.preventDefault();

    try {
      const sendProducts = [];
      for (let { id, quantity } of Object.values(cart)) {
        const item = { id, quantity };
        sendProducts.push(item);
      }
      const token = localStorage.getItem("access_token");
      api.defaults.headers.authorization = "Bearer " + token;
      const { data } = await api.post("/orders/create", sendProducts);
      setOrderDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setModal(orderDetails);
  }, [orderDetails]);

  const CartTableHandler = {
    state: cart,
    setQuantity: (el, value) =>
      setCart((prev) => ({
        ...prev,
        [el]: { ...prev[el], quantity: value },
      })),
  };

  return loading ? (
    <h1>Carregando</h1>
  ) : (
    <form onSubmit={handleSubmit}>
      <Container>
        <DataTable data={products} toggle={handleCart} />
        <CartTable data={cart} toggle={handleCart} handler={CartTableHandler} />
        <CartInfo data={cart} />
        <ModalOrder
          open={modal}
          order={orderDetails}
          close={() => setModal(false)}
          resetData={() => setCart({})}
        />
      </Container>
    </form>
  );
}

// {orderDetails &&  />}
