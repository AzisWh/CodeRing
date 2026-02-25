import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-8">
      <div className="text-center">
        <h1>NotFoundPage</h1>
        <p className="mt-4">Halaman tidak ditemukan.</p>
        <Link to="/" className="mt-6 inline-block text-blue-600">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
