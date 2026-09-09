import { IconType } from "react-icons";
import {
  PROJECT_COLOR_CLASS,
  TechnologiesColor,
  TechnologiesId,
} from "@/data/technologies";

interface Props {
  color: TechnologiesColor;
  title: TechnologiesId;
  icons: IconType[];
}

export default function TechnologiesCard({ color, title, icons }: Props) {
  const bgClass = PROJECT_COLOR_CLASS[color] || "bg-flame-500";

  return (
    <article
      className={`w-full h-full ${bgClass} rounded-2xl p-4 flex flex-col items-center justify-between gap-3 shadow-md hover:scale-[1.02] transition-transform`}
    >
      <span className="bg-black/80 text-white font-black text-xs md:text-sm px-3 py-1 rounded-full uppercase tracking-wider">
        {title}
      </span>

      <div className="flex items-center justify-center gap-3 flex-wrap my-auto">
        {icons?.map((IconComponent, index) => (
          <IconComponent
            key={`${title}-icon-${index}`}
            className="w-12 h-12 md:w-16 md:h-16 text-white shrink-0"
          />
        ))}
      </div>
    </article>
  );
}
