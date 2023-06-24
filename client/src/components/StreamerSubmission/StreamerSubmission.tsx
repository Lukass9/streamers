import React from "react";

const StreamerSubmission = () => {
  return (
    <>
      <form action=''>
        <fieldset>
          <legend>Add new streamer</legend>
          <div className='inp'>
            <input type='text' id='name' name='name' required />
            <label htmlFor='name'> Streamer name </label>
          </div>
          <div className='inp'>
            <select name='striming_platform' id='striming_platform'>
              <option value='Twitch'>Twitch</option>
              <option value='YouTube'>YouTube</option>
              <option value='TikTok'>TikTok</option>
              <option value='Kick'>Kick</option>
              <option value='Rumble'>Rumble</option>
            </select>
            <label htmlFor='striming_platform'> Streamer name </label>
          </div>
          <div className='inp'>
            <textarea id='desc' name='desc' required />
            <label htmlFor='desc'> Description </label>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default StreamerSubmission;
