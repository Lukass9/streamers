import { Streamer } from "../../types/types";
import { useEffect, useState } from "react";
import "./StreamersList.style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";

const StreamersList = () => {
  const [streamers, setStreamers] = useState<Streamer[] | null>(null);

  useEffect(() => {
    const socket = io("http://localhost:8800");
    socket.on("dataUpdated", (updatedStreamers) => {
      setStreamers(updatedStreamers);
    });

    return () => {
      socket.off("streamers");
    };
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8800/api/streamers/`);
  //       setStreamers(res.data);
  //       // console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleUpdatavotes = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const vote = e.currentTarget.value;
    try {
      await axios.put(`http://localhost:8800/api/streamers/${id}/vote`, {
        vote,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='WrappStreamersList'>
      {streamers === null ? (
        <h1>load data...</h1>
      ) : (
        streamers.map((streamer) => (
          <div key={streamer.id} className='WrappCard'>
            <div className='nameWrapp'>
              <h2>{streamer.name}</h2>
              <h5>{streamer.striming_platform}</h5>
            </div>
            <div className='vote'>
              <span>
                <button
                  value='+'
                  onClick={(e) => handleUpdatavotes(e, streamer.id)}
                >
                  +
                </button>
                {streamer.upvote}
              </span>
              <span>
                <button
                  value='-'
                  onClick={(e) => handleUpdatavotes(e, streamer.id)}
                >
                  -
                </button>
                {streamer.downvote}
              </span>
            </div>
            <Link to={`/streamer/${streamer.id}`}>Read more</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default StreamersList;
