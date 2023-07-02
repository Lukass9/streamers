import { Streamer } from "../../types/types";
import { useEffect, useState } from "react";
import styles from "./StreamersList.module.scss";
import { Link } from "react-router-dom";
import axios, { AxiosError, AxiosStatic } from "axios";
import io from "socket.io-client";
import { ReactComponent as Thumb } from "../../assets/thumbs-up-line-icon.svg";
import { ReactComponent as Twitch } from "../../assets/platform/twitch.svg";
import { ReactComponent as YouTube } from "../../assets/platform/youtube.svg";
import { ReactComponent as TikTok } from "../../assets/platform/tiktok.svg";
import { ReactComponent as Kick } from "../../assets/platform/Kick.svg";
import { ReactComponent as Rumble } from "../../assets/platform/RUM.svg";

const StreamersList = () => {
  const [streamers, setStreamers] = useState<Streamer[] | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8800/api/streamers/`);
  //       setStreamers(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const socket = io("http://localhost:8800");
    socket.on("dataUpdated", (updatedStreamers) => {
      setStreamers(updatedStreamers);
    });

    return () => {
      socket.off("streamers");
    };
  }, []);

  const handleUpdatavotes = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const vote = e.currentTarget.value;
    try {
      await axios.put(
        `http://localhost:8800/api/streamers/${id}/vote`,
        {
          vote,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      const err = error as AxiosError;
      alert(err.response?.data);
    }
  };
  const streamingPlatform = (platform: string) => {
    console.log(platform);
    if (platform === "Twitch") return <Twitch className={styles.platform} />;
    else if (platform === "YouTube")
      return <YouTube className={styles.platform} />;
    else if (platform === "TikTok")
      return <TikTok className={styles.platform} />;
    else if (platform === "Kick") return <Kick className={styles.platform} />;
    else if (platform === "Rumble")
      return <Rumble className={styles.platform} />;
  };
  return (
    <div className={styles.WrappStreamersList}>
      {streamers === null ? (
        <h1>load data...</h1>
      ) : (
        streamers.map((streamer) => (
          <div key={streamer.id} className={styles.WrappCard}>
            <div className={styles.nameWrapp}>
              <h2>{streamer.name}</h2>
              <span className={styles.wrappPlatform}>
                {streamingPlatform(streamer.striming_platform)}
                <h5>{streamer.striming_platform}</h5>
              </span>
            </div>
            <div className={styles.wrappVote}>
              <div className={styles.vote}>
                <span className={styles.wrappButton}>
                  <button
                    value='+'
                    onClick={(e) => handleUpdatavotes(e, streamer.id)}
                  >
                    <Thumb className={`${styles.thumbUp} ${styles.thumb}`} />
                  </button>
                  {streamer.upvote}
                </span>
                <span className={styles.wrappButton}>
                  <button
                    value='-'
                    onClick={(e) => handleUpdatavotes(e, streamer.id)}
                  >
                    <Thumb className={`${styles.thumbDown} ${styles.thumb}`} />
                  </button>

                  {streamer.downvote}
                </span>
              </div>
              <Link className={styles.link} to={`/streamer/${streamer.id}`}>
                Read more
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StreamersList;
