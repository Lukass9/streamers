import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Streamer } from "../../types/types";
import rock from "../../assets/Rock.png";
import styles from "./StreamerCard.module.scss";
import { ReactComponent as Twitch } from "../../assets/platform/twitch.svg";
import { ReactComponent as YouTube } from "../../assets/platform/youtube.svg";
import { ReactComponent as TikTok } from "../../assets/platform/tiktok.svg";
import { ReactComponent as Kick } from "../../assets/platform/Kick.svg";
import { ReactComponent as Rumble } from "../../assets/platform/RUM.svg";

const streamingPlatform = (platform: string) => {
  if (platform === "Twitch") return <Twitch className={styles.platform} />;
  else if (platform === "YouTube")
    return <YouTube className={styles.platform} />;
  else if (platform === "TikTok") return <TikTok className={styles.platform} />;
  else if (platform === "Kick") return <Kick className={styles.platform} />;
  else if (platform === "Rumble") return <Rumble className={styles.platform} />;
};

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
    <div className={styles.wrapp}>
      {streamer === null ? (
        <h1>loading streamer details...</h1>
      ) : (
        <div className={styles.wrappCard}>
          <div className={styles.wrappDesc}>
            <h2>{streamer.name}</h2>
            <span>{streamer.desc}</span>
          </div>
          <img className={styles.img} src={rock} alt='Streamer' />
          <div className={styles.wrappPlatform}>
            {streamingPlatform(streamer.striming_platform)}
            <p>{streamer.striming_platform}</p>
          </div>
        </div>
      )}
      <Link className={styles.link} to='/'>
        Back
      </Link>
    </div>
  );
};

export default StreamerCard;
