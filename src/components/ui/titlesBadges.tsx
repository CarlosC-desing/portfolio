"use client";

interface Props {
  title: string;
}

export default function TitleBadges({ title }: Props) {
  return (
    <div className="bg-flame-500 w-full h-[50px] md:w-[600px] md:h-[70px] rounded-[100px] flex items-center justify-center">
      <h2 className="text-2xl md:text-3xl text-flame-white uppercase font-black">
        {title}
      </h2>
    </div>
  );
}
