import express from "express";
import cors from "cors";

import useStreamers from "./routes/streamers.js";
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  ///..other options
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/streamers", useStreamers);

app.listen(8800, () => {
  console.log("Connected!");
});
