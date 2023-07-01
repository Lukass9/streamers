import StreamersList from "../../components/StreamersList/StreamersList";
import StreamerSubmission from "../../components/StreamerSubmission/StreamerSubmission";
import style from "./home.module.scss";
const Home = () => {
  return (
    <div className={style.wrapp}>
      <StreamersList />
      <StreamerSubmission />
    </div>
  );
};

export default Home;
