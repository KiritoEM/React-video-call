import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./index.scss";
import JoinRoom from "./pages/JoinRoom";
import Room from "./pages/Room";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/room/:roomName" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
