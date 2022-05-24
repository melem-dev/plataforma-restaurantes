import products from "./products";
import user from "./user";
import { v4 as uuid } from "uuid";
import events from "../utils/events";

const copy = (data) => JSON.parse(JSON.stringify(data));

/**
 * Order Model
 * - id
 * - total
 * - in
 * - out
 * - status
 * - responsable
 * - items [
 *   {
 *    - id
 *    - quantity
 *    - price
 *    - total
 *   }
 * ]
 */

class Order {
  constructor() {
    this.orders = [];
  }

  create(responsable, items) {
    const orderDetails = {
      id: uuid(),
      total: 0,
      in: new Date().getTime(),
      status: "pendent",
      responsable,
      items: [],
    };

    for (let item of items) {
      const details = products.details(item.id);
      if (!details || details.error) continue;
      const total = details.data.price * item.quantity;
      orderDetails.total += total;
      Object.assign(details.data, { total, quantity: item.quantity });
      orderDetails.items.push(details.data);
    }

    // if order is invalid, return false
    if (orderDetails.items.length === 0) return false;

    // add this to list
    this.orders.push(orderDetails);

    // notify a room: orders
    return orderDetails;
  }

  accept(order_id) {
    try {
      const order = this.orders.filter((el) => el.id === order_id)[0];
      order.status = "confirmed";

      events.emit("message_room", {
        room: "orders",
        event: "notify",
        body: "Você tem um novo pedido!",
      });

      events.emit("message_room", {
        room: "orders",
        event: "confirm-order",
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  remove(order_id) {
    try {
      const order = this.orders.findIndex((el) => el.id === order_id);

      this.orders.splice(order, 1);
      return true;
    } catch (error) {
      return false;
    }
  }

  list() {
    const sendData = [];

    for (let order of this.orders) {
      const x = copy(order);
      x.responsable = user.details(order.responsable).user;
      sendData.push(x);
    }

    return sendData;
  }
}

export default new Order();
