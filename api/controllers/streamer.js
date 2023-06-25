import { db } from "../db.js";

export const addStreamer = (req, res) => {};
export const getStreamers = (req, res) => {
  const q = "SELECT * FROM Streamers";

  db.all(q, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
};
export const getStreamer = (req, res) => {};
export const updateVote = (req, res) => {};
