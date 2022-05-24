import { Server } from "socket.io";
import user from "../entities/user";
import events from "../utils/events";

export default function (server) {
  const io = new Server(server, { cors: "*" });

  io.on("connection", (socket) => {
    socket.on("authenticate", ({ token }) => {
      try {
        if (!token) throw Error(1);
        const details = user.verify({ token });
        if (!details) throw Error(2);
        const rooms = user.rooms(details.data.id);
        for (let room of rooms) {
          console.log(`new user joined at: ${room}`);
          socket.join(room);
        }
      } catch (error) {
        console.log(error.message);
      }

      return socket.emit("authenticated");
    });
  });

  events.on("message_room", ({ room, event, body, type = "info" }) => {
    io.to(room).emit(event, { body, type });
  });
}
