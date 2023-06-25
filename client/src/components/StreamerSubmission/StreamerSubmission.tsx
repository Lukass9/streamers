import "./StreamerSubmission.style.css";

const StreamerSubmission = () => {
  return (
    <div className='WrappStreamerSubmission'>
      <form action=''>
        <fieldset className='subField'>
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
            <label htmlFor='striming_platform'> Striming platform </label>
          </div>
          <div className='inp'>
            <textarea id='desc' name='desc' required />
            <label htmlFor='desc'> Description </label>
          </div>
          <button>Add new streamer</button>
        </fieldset>
      </form>
    </div>
  );
};

export default StreamerSubmission;
