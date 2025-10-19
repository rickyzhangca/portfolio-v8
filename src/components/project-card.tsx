import type { ReactNode } from "react";
import { tw } from "../utils/tw";
import { Image } from "./image";

type ProjectCardProps = {
  image?: string;
  logo: string;
  title: string;
  status: "Active" | "Maintaining" | "Archived";
  children: ReactNode;
};

export const ProjectCard = ({
  image,
  logo,
  title,
  status,
  children,
}: ProjectCardProps) => {
  return (
    <div className="relative flex flex-col gap-7 overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 text-start">
      <div
        className={tw(
          "absolute top-0 right-0 left-0 h-32 bg-gradient-to-b to-white",
          status === "Active" && "from-blue-50",
          status === "Maintaining" && "from-green-50",
          status === "Archived" && "from-orange-50"
        )}
      />
      <div className="z-10 flex flex-col gap-5">
        <h2 className="flex items-center gap-3 font-bold text-2xl">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="project logo" className="size-12" src={logo} />
          {title}
          <div
            className={tw(
              "rounded-lg px-2.5 py-1 font-medium text-sm",
              status === "Active" && "bg-blue-100 text-blue-600",
              status === "Maintaining" && "bg-green-100 text-green-600",
              status === "Archived" && "bg-orange-100 text-orange-600"
            )}
          >
            {status}
          </div>
        </h2>
        <p className="prose max-w-full text-gray-600">{children}</p>
      </div>
      {image && <Image autoHeight className="z-10" src={image} />}
    </div>
  );
};
