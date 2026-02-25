import rowIcon from "@/assets/img/row.png";
import substrack from "@/assets/img/Subtract.png";

const FloatingCard = ({
  icon,
  label,
  title,
}: {
  icon: string;
  label: string;
  title: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-5 flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <img src={icon} alt="icon" className="w-8 h-8" />
        <div>
          <div className="text-xs text-gray-500 uppercase">{label}</div>
          <div className="font-semibold">{title}</div>
        </div>
      </div>
      <img src={rowIcon} alt="arrow" className="w-6 h-6" />
    </div>
  );
};

export const FloatingSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="absolute left-1/2 -translate-x-1/2 top-[88vh] md:top-[92vh] lg:top-[96vh] w-full max-w-md md:max-w-5xl px-4 md:px-6 z-20"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <FloatingCard
          icon={substrack}
          label="PROGRAM"
          title="LOREM IPSUM DOLOR SIT AMET"
        />
        <FloatingCard
          icon={substrack}
          label="Layanan"
          title="LOREM IPSUM DOLOR SIT AMET"
        />
      </div>
    </div>
  );
};
