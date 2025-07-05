import React from "react";
import { PRIZE_DATA } from "../constants";

interface PrizeCardProps {
  amount: string;
  title: string;
  description: string;
  height?: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  amount,
  title,
  description,
  height = "lg:h-30",
}) => {
  return (
    <div className="col-span-1 flex flex-col gap-4">
      <p className="text-2xl lg:text-3xl unbounded-700 leading-snug text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#70A9FF] text-shadow-[0_0_10px_rgba(114, 170, 255,0.6)] text-center">
        {amount}
      </p>
      <div
        className={`rounded-2xl w-full ${height} bg-[#131721] border-[0.5px] border-white lg:border-none lg:bg-[url('src/assets/column-bg.png')] bg-no-repeat bg-cover flex flex-col gap-2 p-4 shadow-[0_0px_30px] shadow-[#001358]`}
      >
        <h5 className="montserrat-700 text-xl">{title}</h5>
        <p className="montserrat-400">{description}</p>
      </div>
    </div>
  );
};

const Prize: React.FC = () => {
  return (
    <div className="w-full h-full bg-linear-to-b from-[#1E1E1E] to-[#141623]">
      <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-10">
        <h2 className="text-3xl lg:text-6xl unbounded-700 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#70A9FF] mt-10">
          Призовий фонд
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
          {PRIZE_DATA.map((prize, index) => (
            <PrizeCard
              key={index}
              amount={prize.amount}
              title={prize.title}
              description={prize.description}
              height={prize.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prize;
