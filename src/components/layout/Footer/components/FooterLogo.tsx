import Logo from "@/assets/img/Logo.png";

export const FooterLogo = () => (
  <div
    className="
      relative 
      flex justify-center 
      md:absolute md:top-0 md:left-[15%]
      items-start
    "
  >
    <div className="relative">
      <img
        src={Logo}
        alt="CodeRing Logo"
        className="
          w-40
          md:w-[82%] 
          block
        "
      />
    </div>
  </div>
);
