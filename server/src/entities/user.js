import users from "../../seed/users.json";
import roles from "../../seed/roles.json";
import types from "../../seed/userTypes.json";

import jwt from "jsonwebtoken";

const secret = "mysecret";

const sign = (payload) => jwt.sign(payload, secret, { expiresIn: "24h" });
const verify = (token) => jwt.verify(token, secret);

class User {
  login({ username, pwd }) {
    const userIndex = users.findIndex((el) => el.user === username);
    const user = users[userIndex];

    try {
      const match = user.password === pwd;

      if (!user || !match) throw new Error();
    } catch (error) {
      return { error: "user not found", status: 400 };
    }

    const token = sign({ id: user.id });

    return { data: token, status: 200 };
  }

  verify({ token }) {
    try {
      const data = verify(token);

      const details = this.details(data.id);

      if (!details) throw Error("user not found");

      return { status: 200, data };
    } catch (error) {
      return { status: 400, error: error.message };
    }
  }

  details(id) {
    const user = users.filter((el) => el.id === id)[0];

    if (!user) return false;

    return user;
  }

  rooms(id) {
    const user = this.details(id);
    const rooms = [];

    if (!user) throw Error("user not found at check rooms");

    for (let role of user.roles) {
      for (let permission of roles[role]) {
        if (permission.startsWith("rooms:"))
          rooms.push(permission.replace("rooms:", ""));
      }
    }

    return rooms;
  }

  profile(id) {
    try {
      const details = this.details(id);

      const profile = {
        name: details.user,
        userType: types[details.userType],
      };

      return { status: 200, data: profile };
    } catch (error) {
      return { status: 400, error: error.message };
    }
  }
}

export default new User();
