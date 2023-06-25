import "./App.css";
import Streamer from "./components/Streamer/Streamer";
import StreamerSubmission from "./components/StreamerSubmission/StreamerSubmission";
import StreamersList from "./components/StreamersList/StreamersList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <StreamersList />
          <StreamerSubmission />
        </>
      ),
    },
    {
      path: "/streamer/:id",
      element: <Streamer />,
    },
  ],
  { basename: "/StreamerSubmission/" }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
