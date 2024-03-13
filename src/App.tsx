import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./index.scss";
import JoinRoom from "./pages/JoinRoom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/join-room" element={<JoinRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
