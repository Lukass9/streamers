import { Server } from "socket.io";
import { db } from "./db.js";

export function initializeSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected!");

    db.all("SELECT * FROM Streamers", (err, rows) => {
      if (err) {
        console.error(err);
        return;
      }

      socket.emit("dataUpdated", rows);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected!");
    });
  });

  return io;
}

export function sendUpdatedData(io) {
  db.all("SELECT * FROM Streamers", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      io.sockets.emit("dataUpdated", data);
    }
  });
}
