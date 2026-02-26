import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingLayout from "../components/layout/LandingLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "@/pages/Landing/Home/Home";
import Program from "@/pages/Landing/Program/Program";
import Layanan from "@/pages/Landing/Layanan/Layanan";
import TentangKami from "@/pages/Landing/TentangKami/TentangKami";

const LandingRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default LandingRoutes;
