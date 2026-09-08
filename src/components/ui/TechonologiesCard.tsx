import Image from 'next/image';
import { PROJECT_COLOR_CLASS, TechnologiesColor, TechnologiesId } from '@/data/technologies';

interface Props {
  color: TechnologiesColor;
  title: TechnologiesId;
  img: string[];
}

export default function TechnologiesCard({ color, title, img }: Props) {
  const bgClass = PROJECT_COLOR_CLASS[color] || 'bg-flame-500';

  return (
    <article className={`w-full h-full ${bgClass} rounded-2xl p-4 flex flex-col items-center justify-between gap-3 shadow-md hover:scale-[1.02] transition-transform`}>
      <span className="bg-black/80 text-white font-black text-xs md:text-sm px-3 py-1 rounded-full uppercase tracking-wider">
        {title}
      </span>

      <div className="flex items-center justify-center gap-2 flex-wrap my-auto">
        {img?.map((techImage, index) => (
          <Image
            key={index}
            src={techImage}
            alt={`Logo de ${title}`}
            width={64}
            height={64}
            className="object-contain w-12 h-12 md:w-16 md:h-16"
          />
        ))}
      </div>
    </article>
  );
}