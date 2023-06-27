import express from "express";
import {
  addStreamer,
  getStreamer,
  getStreamers,
  updateVote,
} from "../controllers/streamer.js";

const router = express.Router();

router.post("/", addStreamer);
router.get("/", getStreamers);
router.get("/:id", getStreamer);
router.put("/:id/vote", updateVote);

export default router;
