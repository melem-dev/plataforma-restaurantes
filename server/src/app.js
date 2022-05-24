import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";
import "dotenv/config";

const app = express();

async function main() {
  // app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);
  return app;
}

export default main;
