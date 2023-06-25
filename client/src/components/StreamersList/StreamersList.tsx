import { Streamer } from "../../types/types";
import { useEffect, useState } from "react";
import "./StreamersList.style.css";
import { Link } from "react-router-dom";
import axios from "axios";

// const streamers_data = [
//   {
//     id: 1,
//     name: "NoName",
//     striming_platform: "youtube",
//     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
//     upvote: 10,
//     downvote: 2,
//   },
//   {
//     id: 2,
//     name: "Alex",
//     striming_platform: "Twiter",
//     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
//     upvote: 6,
//     downvote: 4,
//   },
//   {
//     id: 3,
//     name: "lama_dev",
//     striming_platform: "youtube",
//     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
//     upvote: 20,
//     downvote: 0,
//   },
//   {
//     id: 4,
//     name: "Arrow",
//     striming_platform: "TikTok",
//     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui reiciendis ex, rem illum aperiam impedit nesciunt inventore quo itaque amet earum maxime ipsum excepturi quidem expedita harum, laudantium quam?",
//     upvote: 4,
//     downvote: 8,
//   },
// ];

const StreamersList = () => {
  // const streamers: Streamer[] | null = streamers_data;
  const [streamers, setStreamers] = useState<Streamer[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/streamers/`);
        setStreamers(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // setStreamers(streamers_data);
  }, []);
  return (
    <div className='WrappStreamersList'>
      {streamers.map((streamer) =>
        streamers ? (
          <div key={streamer.id} className='WrappCard'>
            <div className='nameWrapp'>
              <h2>{streamer.name}</h2>
              <h5>{streamer.striming_platform}</h5>
            </div>
            <div className='vote'>
              <span> +{streamer.upvote}</span>
              <span> -{streamer.downvote}</span>
            </div>
            <Link to={`/streamer/${streamer.id}`}>Read more</Link>
          </div>
        ) : (
          <div>Not here yet</div>
        )
      )}
    </div>
  );
};

export default StreamersList;
