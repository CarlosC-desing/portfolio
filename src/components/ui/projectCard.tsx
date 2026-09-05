import Image from "next/image";

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
          height={200} />
      </div>
      <p className="text-flame-white text-[15px] text-justify">Aplicación de gestión y reservas para barberías con panel de administración y diseño moderno{description}</p>
      <div className="bg-flame-900 h-[30px] flex items-center gap-2 px-2">
        {stack?.map((techImage, index) => (
          <Image
            key={index}
            src={techImage}
            alt="stack icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        ))}
      </div>
      <div className="flex gap-4">
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-flame-300 hover:underline">
            Ver Demo
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-flame-300 hover:underline">
            {`GitHub </>`}
          </a>
        )}
      </div>
    </article>
  );
}