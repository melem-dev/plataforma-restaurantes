import data from "../../seed/products.json";
import { v4 as uuid } from "uuid";

class Products {
  constructor() {
    this.products = data;
  }

  list() {
    const count = this.products.length ? this.products.length : 0;
    const data = this.products;
    return { count, data };
  }

  details(id) {
    if (!id) return { error: "ID is not valid" };
    const product = this.products.filter((el) => el.id === id)[0];
    if (!product) return { error: "product not found" };
    return { count: 1, data: product };
  }
}

export default new Products();
