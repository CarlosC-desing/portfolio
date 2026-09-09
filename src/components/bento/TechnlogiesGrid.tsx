import { TECHNOLOGIES_DATA } from "@/data/technologies";
import TitleBadges from "../ui/TitlesBadges";
import TechnologiesCard from "../ui/TechnologiesCard";

export default function TechnologiesGrid() {
  const frontEndTechs = TECHNOLOGIES_DATA.filter((t) =>
    [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind",
      "React",
      "Sass",
    ].includes(t.id),
  );

  const backEndTechs = TECHNOLOGIES_DATA.filter((t) =>
    ["MongoDB", "Express", "Node.js", "PostgreSQL"].includes(t.id),
  );

  const otherTechs = TECHNOLOGIES_DATA.filter((t) =>
    ["Linux CachyOS", "N8N", "Figma", "Adobe Illustrator"].includes(t.id),
  );

  return (
    <section className="w-full max-w-6xl mx-auto p-4 flex flex-col gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Columna FrontEnd */}
        <div className="lg:col-span-3 flex flex-col items-center gap-6">
          <TitleBadges title="FrontEnd" />
          <div className="grid grid-cols-3 auto-rows-[120px] gap-4 w-full">
            {frontEndTechs.map((tech) => (
              <div key={tech.id} className={tech.gridSpan}>
                <TechnologiesCard
                  color={tech.color}
                  title={tech.id}
                  icons={tech.icons}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Columna BackEnd */}
        <div className="lg:col-span-2 flex flex-col items-center gap-6">
          <TitleBadges title="BackEnd" />
          <div className="grid grid-cols-2 auto-rows-[120px] gap-4 w-full">
            {backEndTechs.map((tech) => (
              <div key={tech.id} className={tech.gridSpan}>
                <TechnologiesCard
                  color={tech.color}
                  title={tech.id}
                  icons={tech.icons}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección Herramientas y Sistema */}
      {otherTechs.length > 0 && (
        <div className="flex flex-col items-center gap-6 mt-6">
          <TitleBadges title="Tools & OS" />
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] gap-4 w-full">
            {otherTechs.map((tech) => (
              <div key={tech.id} className={tech.gridSpan}>
                <TechnologiesCard
                  color={tech.color}
                  title={tech.id}
                  icons={tech.icons}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
