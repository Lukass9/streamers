import express from "express";
import cors from "cors";
import session from "express-session";
import { createServer } from "http";
import { initializeSocket } from "./socket.js";
import useStreamers from "./routes/streamers.js";

const app = express();
app.use(
  session({
    secret: "secret-key",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
    },
  })
);

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/streamers", useStreamers);

const server = createServer(app);
export const io = initializeSocket(server);

const PORT = 8800;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
