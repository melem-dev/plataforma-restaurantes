import { Router } from "express";
import products from "./products";
import session from "./session";
import order from "./order";

const route = Router();

route.use(products);
route.use(session);
route.use(order);

export default route;
