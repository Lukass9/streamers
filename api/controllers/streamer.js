import { db } from "../db.js";

export const addStreamer = (req, res) => {
  const q =
    "INSERT INTO Streamers ( `name`, `striming_platform`, `desc`) VALUES (?,?,?)";

  const values = [req.body.name, req.body.striming_platform, req.body.desc];

  db.run(q, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.status(201).json("Streamers has been added.");
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
