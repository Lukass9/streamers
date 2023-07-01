import { db } from "../db.js";
import { io } from "../index.js";
import { sendUpdatedData } from "../socket.js";
import { getStreamersVotes } from "./helperFunctions.js";

export const addStreamer = (req, res) => {
  const q = "SELECT * FROM Streamers WHERE name = ?";

  db.all(q, req.body.name, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    if (data.length) return res.status(409).json("user already exists!");

    const q =
      "INSERT INTO Streamers ( `name`, `striming_platform`, `desc`) VALUES (?,?,?)";

    const values = [req.body.name, req.body.striming_platform, req.body.desc];

    db.run(q, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      sendUpdatedData(io);
      return res.status(201).json("Streamers has been added.");
    });
  });
};
export const getStreamers = (req, res) => {
  const q = "SELECT * FROM Streamers";

  db.all(q, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
};
export const getStreamer = (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM Streamers WHERE id=?";

  db.all(q, id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
};
export const updateVote = async (req, res) => {
  const id = req.params.id;
  const vote = req.body.vote;
  const q = "UPDATE Streamers SET `upvote`=?,`downvote`=? WHERE `id`=?";

  if (!req.session[`streamer_${id}`]) {
    req.session[`streamer_${id}`] = true;
    const values = await getStreamersVotes(id, vote, res);
    db.run(q, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      sendUpdatedData(io);
      return res.status(200).json("Votes has been changed.");
    });
  } else {
    res.status(409).json("This streamer has already been voted for");
  }
  // console.log(req.session);
};
