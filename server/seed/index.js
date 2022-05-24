import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";

const paths = {
  products: path.resolve(__dirname, "products.json"),
  users: path.resolve(__dirname, "users.json"),
};

async function main() {
  await setupProducts();
  await setupUsers();
}

async function setupProducts() {
  try {
    const data = JSON.parse(fs.readFileSync(paths.products).toString());
    for (let item of data) item.id = uuid().split("-")[0];
    fs.writeFileSync(paths.products, JSON.stringify(data));
  } catch (error) {
    console.log("setup products not working, reason:", error.message);
  }
}

async function setupUsers() {
  try {
    const data = JSON.parse(fs.readFileSync(paths.users).toString());
    for (let item of data) item.id = uuid().split("-")[0];
    fs.writeFileSync(paths.users, JSON.stringify(data));
  } catch (error) {
    console.log("setup users not working, reason:", error.message);
  }
}

main().catch(console.error);

export default main;
