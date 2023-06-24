import { Streamer } from "../../types/types";
const streamers_data = [
  {
    id: 1,
    name: "NoName",
    striming_platform: "youtube",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
    upvote: 10,
    downvote: 2,
  },
  {
    id: 2,
    name: "Alex",
    striming_platform: "Twiter",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
    upvote: 6,
    downvote: 4,
  },
  {
    id: 3,
    name: "lama_dev",
    striming_platform: "youtube",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
    upvote: 20,
    downvote: 0,
  },
  {
    id: 4,
    name: "Arrow",
    striming_platform: "TikTok",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
    upvote: 4,
    downvote: 8,
  },
];

const StreamersList = () => {
  const streamers: Streamer[] | null = streamers_data;
  return (
    <>
      {streamers.map((streamer) =>
        streamers ? (
          <div key={streamer.id}>
            <p>{streamer.name}</p>
            <p>{streamer.striming_platform}</p>
            <p>{streamer.desc}</p>
          </div>
        ) : (
          <div>Not here yet</div>
        )
      )}
    </>
  );
};

export default StreamersList;
