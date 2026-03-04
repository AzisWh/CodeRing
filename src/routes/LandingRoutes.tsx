import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingLayout from "../components/layout/LandingLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "@/pages/Landing/Home/Home";
import Program from "@/pages/Landing/Program/Program";
import Layanan from "@/pages/Landing/Layanan/Layanan";
import TentangKami from "@/pages/Landing/TentangKami/TentangKami";
import Portofolio from "@/pages/Landing/Portofolio/Portofolio";
import Berita from "@/pages/Landing/Berita/Berita";
import Kontak from "@/pages/Landing/Kontak/Kontak";
import BeritaDetail from "@/pages/Landing/Berita/BeritaDetail";

const LandingRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default LandingRoutes;
