import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import useStreamers from "./routes/streamers.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/streamers", useStreamers);

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected!");

  socket.on("disconnect", () => {
    console.log("A user disconnected!");
  });
});

const PORT = 8800;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
