import util from "util";
import { db } from "../db.js";

export const getStreamersVotes = async (id, vote, res) => {
  const q = "SELECT upvote, downvote FROM Streamers WHERE `id`=?";
  let voteForDatabase;
  const dbAll = util.promisify(db.all.bind(db));
  try {
    const data = await dbAll(q, id);
    voteForDatabase = data[0];
  } catch (err) {
    res.status(500).json(err);
  }
  let { upvote, downvote } = voteForDatabase;
  if (vote === "+") upvote++;
  else if (vote === "-") downvote++;

  return [upvote, downvote, id];
};
