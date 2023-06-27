import { Streamer } from "../../types/types";
import { useEffect, useState } from "react";
import "./StreamersList.style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";

const StreamersList = () => {
  // const socket = io("http://localhost:8800");
  const navigate = useNavigate();
  const [streamers, setStreamers] = useState<Streamer[] | null>(null);

  // useEffect(() => {
  //   // Nasłuchuj zdarzenia 'streamers'
  //   socket.on("streamers", (updatedStreamers) => {
  //     console.log("Otrzymano listę streamerów:", updatedStreamers);
  //     // Zaktualizuj stan aplikacji na podstawie otrzymanej listy streamerów
  //     // setStreamers(updatedStreamers);
  //   });

  //   return () => {
  //     // Wyczyść nasłuchiwanie zdarzenia przy usuwaniu komponentu
  //     socket.off("streamers");
  //   };
  // }, []);

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
  }, []);

  const handleUpdatavotes = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    upvote: number | undefined,
    downvote: number | undefined
  ) => {
    e.preventDefault();
    if (upvote !== undefined && e.currentTarget.innerHTML === "+") upvote++;
    else if (downvote !== undefined && e.currentTarget.innerHTML === "-")
      downvote++;
    try {
      await axios.put(`http://localhost:8800/api/streamers/${id}/vote`, {
        upvote,
        downvote,
      });
    } catch (err) {
      console.log(err);
    }
    navigate(0);
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
                  onClick={(e) =>
                    handleUpdatavotes(
                      e,
                      streamer.id,
                      streamer.upvote,
                      streamer.downvote
                    )
                  }
                >
                  +
                </button>
                {streamer.upvote}
              </span>
              <span>
                <button
                  onClick={(e) =>
                    handleUpdatavotes(
                      e,
                      streamer.id,
                      streamer.upvote,
                      streamer.downvote
                    )
                  }
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
