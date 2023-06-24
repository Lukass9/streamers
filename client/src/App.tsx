import "./App.css";
import StreamerSubmission from "./components/StreamerSubmission/StreamerSubmission";
import StreamersList from "./components/StreamersList/StreamersList";
import { Streamer } from "./types/types";

function App() {
  return (
    <>
      <h1>Lista streamerów</h1>
      <StreamersList />;
      <StreamerSubmission />
    </>
  );
}

export default App;
