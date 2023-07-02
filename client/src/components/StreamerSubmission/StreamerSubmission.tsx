import { useState } from "react";
import axios, { AxiosError } from "axios";
import styles from "./StreamerSubmission.module.scss";

const StreamerSubmission = () => {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("Twitch");
  const [desc, setDesc] = useState("");
  const [err, setErr] = useState<string>("");

  const handleSubbmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name && platform && desc) {
      try {
        await axios.post("http://localhost:8800/api/streamers/", {
          name,
          striming_platform: platform,
          desc,
        });
        setErr("");
      } catch (error) {
        const err = error as AxiosError;
        setErr(err.response?.data as string);
      }

      setName("");
      setPlatform("Twitch");
      setDesc("");
    } else {
      setErr("Complete all form fields");
    }
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
    <div className={styles.wrapp}>
      <form>
        <fieldset className={styles.subField}>
          <legend>Add new streamer</legend>
          <div className={styles.inp}>
            <label htmlFor='name'> Streamer name </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className={styles.inp}>
            <label htmlFor='striming_platform'> Striming platform </label>
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
          </div>
          <div className={styles.inp}>
            <label htmlFor='desc'> Description </label>
            <textarea
              id='desc'
              name='desc'
              required
              value={desc}
              onChange={handleChangeDesc}
            />
          </div>
          {err && <p className={styles.error}>{err}</p>}

          <button onClick={handleSubbmit}>Add new streamer</button>
        </fieldset>
      </form>
    </div>
  );
};

export default StreamerSubmission;
