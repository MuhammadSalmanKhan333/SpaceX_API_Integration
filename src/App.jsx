import "./App.css";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent/MainContent";
import History from "./pages/History/History";
import Mission from "./pages/Mission/Missions";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ViewDetails from "./pages/View/ViewDetails";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/history/:id" element={<ViewDetails />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
          <Route path="/mission/:id" element={<Mission />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
