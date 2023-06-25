import { useState } from "react";
import axios from "axios";
import "./StreamerSubmission.style.css";

const StreamerSubmission = () => {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("Twitch");
  const [desc, setDesc] = useState("");

  const handleSubbmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(platform);
    try {
      await axios.post("http://localhost:8800/api/streamers/", {
        name,
        striming_platform: platform,
        desc,
      });
    } catch (error) {
      console.log(error);
    }

    setName("");
    setPlatform("Twitch");
    setDesc("");
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangePlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.target.value);
  };
  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  return (
    <div className='WrappStreamerSubmission'>
      <form action=''>
        <fieldset className='subField'>
          <legend>Add new streamer</legend>
          <div className='inp'>
            <input
              type='text'
              id='name'
              name='name'
              required
              value={name}
              onChange={handleChangeName}
            />
            <label htmlFor='name'> Streamer name </label>
          </div>
          <div className='inp'>
            <select
              name='striming_platform'
              id='striming_platform'
              required
              value={platform}
              onChange={handleChangePlatform}
            >
              <option value='Twitch'>Twitch</option>
              <option value='YouTube'>YouTube</option>
              <option value='TikTok'>TikTok</option>
              <option value='Kick'>Kick</option>
              <option value='Rumble'>Rumble</option>
            </select>
            <label htmlFor='striming_platform'> Striming platform </label>
          </div>
          <div className='inp'>
            <textarea
              id='desc'
              name='desc'
              required
              value={desc}
              onChange={handleChangeDesc}
            />
            <label htmlFor='desc'> Description </label>
          </div>
          <button onClick={handleSubbmit}>Add new streamer</button>
        </fieldset>
      </form>
    </div>
  );
};

export default StreamerSubmission;
