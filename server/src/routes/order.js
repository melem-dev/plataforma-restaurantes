import { Router } from "express";
import orders from "../entities/orders";

import M_authenticate from "../middlewares/authenticate";

const routes = Router();

routes.post("/orders/create", M_authenticate, (req, res) => {
  const sendOrder = orders.create(req.user.id, req.body);

  if (!sendOrder) return res.sendStatus(400);

  console.log("new order created");

  console.log(orders.list());

  return res.status(201).json(sendOrder);
});

routes.post("/orders/accept/:order_id", M_authenticate, (req, res) => {
  const accepted = orders.accept(req.params.order_id);

  if (!accepted) return res.sendStatus(400);

  return res.sendStatus(200);
});

routes.get("/orders/list", M_authenticate, (req, res) => {
  const data = orders.list();
  return res.status(200).json({ count: data.length, data });
});

export default routes;
