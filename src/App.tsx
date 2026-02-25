import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingRoutes from "./routes/LandingRoutes";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="/*" element={<LandingRoutes />} />
    </Routes>
  );
}

export default App;
