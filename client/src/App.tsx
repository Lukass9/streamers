import StreamerCard from "./components/Streamer/StreamerCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home/home";
import "./app.scss";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
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
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
