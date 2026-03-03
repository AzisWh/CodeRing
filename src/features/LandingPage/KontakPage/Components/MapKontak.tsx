import React from "react";
import { basecolor } from "@/constant/color";
import Map from "./Map";

const MapKontak: React.FC = () => {
  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-16 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <Map />
        </div>

        <div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: basecolor.darkBlue }}
          >
            Kunjungi Kami!
          </h2>

          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: basecolor.darkBlue }}
              >
                Alamat
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: basecolor.darkgrey }}
              >
                Jl. Imam Bonjol No.207, Pendrikan Kidul,
                <br />
                Kec. Semarang Tengah, Kota Semarang,
                <br />
                Jawa Tengah 50131
              </p>
            </div>

            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: basecolor.darkBlue }}
              >
                Telephone
              </h3>
              <p className="text-sm" style={{ color: basecolor.darkgrey }}>
                (024) 123123
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapKontak;
