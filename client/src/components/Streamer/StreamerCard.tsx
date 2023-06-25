import { useLocation, Link } from "react-router-dom";

const StreamerCard = () => {
  const location = useLocation();
  const streamerId = location.pathname.split("/")[2];
  return (
    <div>
      <h2>name</h2>
      <p>striming platform</p>
      <img
        src='https://www.epidemicsound.com/blog/content/images/2021/12/How-to-live-stream-1.jpg'
        alt='Streamer sitting before your computer'
      />
      <span>description</span>
      <Link to='/'>Back</Link>
    </div>
  );
};

export default StreamerCard;
