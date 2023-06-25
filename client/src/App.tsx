import "./App.css";
import StreamerCard from "./components/Streamer/StreamerCard";
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
      element: <StreamerCard />,
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
