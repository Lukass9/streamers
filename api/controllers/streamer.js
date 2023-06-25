import { db } from "../db.js";

export const addStreamer = (req, res) => {
  const q = "INSERT INTO Streamers(`id`, `name`, `striming_platform`, `desc`)";

  const values = [
    req.body.id,
    req.body.name,
    req.body.striming_platform,
    req.body.desc,
  ];

  db.all(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Streamers has been added.");
  });
};
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
