import basecolor from "@/constant/color";

export const FooterContact = () => (
  <div className="text-white text-center md:text-left">
    <h4
      className="font-semibold mb-3 inline-block pb-1"
      style={{ borderBottom: `3px solid ${basecolor.orange}` }}
    >
      Kontak Kami
    </h4>

    <ul className="mt-4 text-sm space-y-2">
      <li>Jl. Lorem ipsum dolor No.20</li>
      <li>loremipsumdolor@gmail.com</li>

      <li className="flex justify-center md:justify-start items-center gap-2 mt-3">
        <span className="w-7 h-7 bg-white/10 rounded-sm flex items-center justify-center">
          in
        </span>
        <span className="w-7 h-7 bg-white/10 rounded-sm flex items-center justify-center">
          fb
        </span>
        <span className="w-7 h-7 bg-white/10 rounded-sm flex items-center justify-center">
          ig
        </span>
      </li>
    </ul>
  </div>
);