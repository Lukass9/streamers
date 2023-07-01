import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Streamer } from "../../types/types";
import rock from "../../assets/Rock.png";
import style from "./StreamerCard.module.css";

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
    <div className={style.Wrapp}>
      {streamer === null ? (
        <h1>loading streamer details...</h1>
      ) : (
        <div className={style.WrappCard}>
          <h2>{streamer.name}</h2>
          <p>{streamer.striming_platform}</p>
          <img src={rock} alt='Streamer' />
          <span>{streamer.desc}</span>
        </div>
      )}
      <Link to='/'>Back</Link>
    </div>
  );
};

export default StreamerCard;
