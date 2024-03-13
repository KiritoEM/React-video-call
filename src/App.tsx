import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
