interface Props {
  title: string;
  link?: string;
  isExternal?: boolean;
}

export default function ButtonShine({ title, link = "#", isExternal = true }: Props) {
  if (!link) return null;

  return (
    <a
      href={link}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`Go to ${title}`}
      className="
        relative overflow-hidden inline-flex items-center justify-center 
        w-[150px] h-[30px] rounded-full bg-flame-950 
        transition-transform active:scale-95
        before:absolute before:inset-y-0 before:w-[50px]
        before:bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.6)_50%,transparent_80%)]
        before:animate-shine
      "
    >
      <span className="relative z-10 text-flame-white font-bold uppercase text-xs">
        {title}
      </span>
    </a>
  );
}