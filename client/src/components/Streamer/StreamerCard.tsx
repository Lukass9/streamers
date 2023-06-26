import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Streamer } from "../../types/types";

const StreamerCard = () => {
  const [streamer, setStreamer] = useState<Streamer | null>(null);
  const location = useLocation();
  const streamerId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/streamers/${streamerId}`
        );
        setStreamer(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [streamerId]);

  return (
    <div>
      {streamer === null ? (
        <h1>loading streamer details...</h1>
      ) : (
        <>
          <h2>{streamer.name}</h2>
          <p>{streamer.striming_platform}</p>
          <img
            src='https://www.epidemicsound.com/blog/content/images/2021/12/How-to-live-stream-1.jpg'
            alt='Streamer sitting before your computer'
          />
          <span>{streamer.desc}</span>
        </>
      )}
      <Link to='/'>Back</Link>
    </div>
  );
};

export default StreamerCard;
