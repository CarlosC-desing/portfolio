import Image from "next/image";
import ButtonShine from "./buttonShine";

interface Props {
  color: string;
  title: string;
  description: string;
  img: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export default function ProjectCard({ color, title, description, img, stack, links }: Props) {
  return (
    <article className={`w-full h-[450px] rounded-xl p-4 transition-all bg-flame-850 ${color} flex flex-col items-center gap-2`}>
      <h3 className="text-xl font-black text-flame-white uppercase">{title}</h3>
      <div className="border">
        <Image
          className="rounded-xl"
          src={img}
          alt={`Image of ${title}`}
          width={335}
          height={200}
        />
      </div>

      <p className="text-flame-white text-[15px] text-justify">
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
            title="Demo"
            link={links.demo}
          />
        )}
        {links.github && (
          <ButtonShine
            title="github"
            link={links.github}
          />
        )}
      </div>
    </article>
  );
}