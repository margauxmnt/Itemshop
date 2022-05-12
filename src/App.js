import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Basketpage from "./pages/Basketpage";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/basket" element={<Basketpage />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default App;
