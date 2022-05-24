import { Router } from "express";
import products from "../entities/products";

const routes = Router();

routes.get("/products", (req, res) => {
  const data = products.list();

  if (data.error) return res.status(400).json(data);

  return res.status(200).json(data);
});

routes.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const data = products.details(id);

  if (data.error) return res.status(400).json(data);

  return res.status(200).json(data);
});

export default routes;
