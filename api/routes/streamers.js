import express from "express";
import {
  addStreamer,
  getStreamer,
  getStreamers,
  updateVote,
} from "../controllers/streamer.js";
import { io } from "../index.js";

const router = express.Router();

router.post("/", addStreamer);
router.get("/", getStreamers);
router.get("/:id", getStreamer);
router.put("/:id/vote", updateVote);

export async function emitStreamersUpdated() {
  try {
    const streamers = await getStreamers();
    io.emit("streamers", streamers);
  } catch (error) {
    console.log(error);
  }
}

export default router;
