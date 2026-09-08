import Image from "next/image";
import { PROJECT_COLOR_CLASS, type ProjectColor } from "@/data/projects";
import { cn } from "@/lib/utils";
import ButtonShine from "./buttonShine";

interface Props {
  color: ProjectColor;
  title: string;
  description: string;
  img: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  demoText?: string;
  codeText?: string;
}

export default function ProjectCard({
  color,
  title,
  description,
  img,
  stack,
  links,
  demoText = "Demo",
  codeText = "Código",
}: Props) {
  return (
    <article
      className={cn(
        "w-full h-full rounded-xl p-4 transition-all flex flex-col items-center gap-2",
        PROJECT_COLOR_CLASS[color],
      )}
    >
      <h3 className="text-xl font-black text-flame-white uppercase">{title}</h3>
      <div>
        <Image
          className="rounded-xl"
          src={img}
          alt={`Image of ${title}`}
          width={335}
          height={200}
        />
      </div>

      <p className="text-flame-white text-[15px] text-justify italic">
        {description}
      </p>

      <div
        className="bg-flame-900 h-[30px] w-full flex items-center justify-center gap-4 px-4 overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {stack?.map((techImage, index) => (
          <Image
            key={index}
            src={techImage}
            alt="stack icon"
            width={24}
            height={24}
            className="w-6 h-6 object-contain flex-shrink-0"
          />
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {links.demo && (
          <ButtonShine
            title={demoText}
            link={links.demo}
          />
        )}
        {links.github && (
          <ButtonShine
            title={codeText}
            link={links.github}
          />
        )}
      </div>
    </article>
  );
}