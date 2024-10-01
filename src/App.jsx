import "./App.css";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent/MainContent";
import History from "./components/pages/History/History";
import Mission from "./components/pages/Mission/Missions";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/history/:id" element={<History />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
          <Route path="/mission/:id" element={<Mission />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
