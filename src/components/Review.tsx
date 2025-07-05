import React from "react";
import { EVENT_INFO, DORAHACKS_URL } from "../constants";

interface InfoCardProps {
  label: string;
  value: string;
  colSpan?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  label,
  value,
  colSpan = "col-span-full md:col-span-6",
}) => {
  return (
    <div
      className={`${colSpan} rounded-2xl bg-linear-to-r from-white to-white via-[#0055FF50] p-[0.5px] min-h-20`}
    >
      <div className="rounded-2xl bg-linear-to-r from-[#212121] to-[#0E0E0E] h-full flex items-center p-5 gap-4">
        <span className="montserrat-700 text-[#74ABFF] md:text-2xl">
          {label}
        </span>
        <div className="w-[1px] h-full bg-white"></div>
        <span className="montserrat-400 text-white  md:text-2xl">{value}</span>
      </div>
    </div>
  );
};

const Review: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1E1E1E]">
      <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-10">
        <h2 className="text-3xl lg:text-6xl unbounded-700 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#70A9FF] to-[#FFFFFF]">
          Огляд кваліфікаційного раунду
        </h2>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-11 gap-5">
            <InfoCard {...EVENT_INFO[0]} />
            <InfoCard {...EVENT_INFO[1]} />
          </div>

          <div className="grid grid-cols-11 gap-5">
            <InfoCard {...EVENT_INFO[2]} />
            <InfoCard {...EVENT_INFO[3]} />
          </div>

          <div className="grid grid-cols-11 gap-5">
            <InfoCard {...EVENT_INFO[4]} />
          </div>
        </div>

        <div className="bg-blue-500 rounded-3xl min-h-30 w-full mt-3 p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <h5 className="unbounded-700 text-3xl lg:text-6xl">Реєстрація</h5>
          <a
            href={DORAHACKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/dora-hacks.svg"
              alt="DoraHacks Registration"
              className="md:w-52 w-44 h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
