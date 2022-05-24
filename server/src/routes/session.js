import { Router } from "express";
import users from "../../seed/users.json";
import user from "../entities/user";
import M_authenticate from "../middlewares/authenticate";

const routes = Router();

routes.get("/users", (req, res) => {
  return res.status(200).json(users);
});

routes.get("/login/:username/:pwd", (req, res) => {
  const { status, data, error } = user.login(req.params);

  if (error) return res.status(status).json(error);

  return res.status(200).json(data);
});

routes.get("/auth/:token", (req, res) => {
  const { status, error } = user.verify(req.params);

  if (error) return res.status(status).json(error);

  return res.sendStatus(status);
});

routes.get("/profile", M_authenticate, (req, res) => {
  const { status, data, error } = user.profile(req.user.id);

  if (error) return res.status(status).json(error);

  return res.status(status).json(data);
});

export default routes;
