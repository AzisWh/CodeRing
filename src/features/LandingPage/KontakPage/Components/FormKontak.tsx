"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import basecolor from "@/constant/color";

const FormKontak = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Hubungi Kami</h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Anda dapat membuat janji temu atau berdiskusi tentang perusahaan
            atau produk Anda melalui kontak di bawah ini.
          </p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Nama" className="h-12" />
            <Input type="email" placeholder="Email" className="h-12" />
          </div>

          <Input type="text" placeholder="Subjek" className="h-12" />

          <Textarea placeholder="Pesan" className="min-h-40 resize-none" />

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="lg"
              className="px-12 text-white hover:opacity-90 transition"
              style={{ backgroundColor: basecolor.orange }}
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormKontak;
