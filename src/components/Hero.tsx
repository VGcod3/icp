import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#1E1E1E] relative pt-20">
      <div className="w-full max-w-6xl mx-auto z-10 relative mt-10 p-4">
        <h1 className="text-3xl lg:text-6xl unbounded-700 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#70A9FF] to-[#FFFFFF]">
          Кваліфікаційний раунд WCHL 2025
        </h1>
        <p className="md:text-xl lg:text-2xl montserrat-400 text-white right-[31%] top-26 lg:absolute max-w-lg mt-5 md:mt-0">
          Хакни майбутнє —
        </p>
        <p className="md:text-xl lg:text-2xl montserrat-400 text-white right-[5%] top-34 lg:absolute max-w-lg">
          створки свою спадщину на ICP
        </p>
        <h4 className="md:text-xl lg:text-2xl unbounded-500 text-white text-center md:text-left mt-4">
          Ласкаво просимо
          <span className="unbounded-700 md:text-2xl lg:text-3xl ml-2">
            до WCHL 2025
          </span>
        </h4>
        <div className="border border-[#FFFFFF50] rounded-2xl p-8 mt-4 md:mt-8 max-w-2xl flex flex-col gap-4 bg-linear-to-r from-[#21212170] to-[#0E0E0E70]">
          <p className="montserrat-400">
            <span className="montserrat-700 mr-2">
              World Computer Hacker League (WCHL) 2025
            </span>
            — це
            <span className="montserrat-700 mx-2">глобальний хакатон</span>
            під керівництвом мережі ICP HUBS. Мета цієї події —
            <span className="montserrat-700 mx-2">
              виявити, підтримати та продемонструвати
            </span>
            найкращі таланти серед розробників в екосистемі ICP.
          </p>
          <p className="montserrat-400">
            Протягом наступних
            <span className="montserrat-700 mx-2">4 місяців</span>
            ініціатива стимулюватиме інновації, розширюватиме спільноту
            розробників і підтримуватиме створення впливових застосунків (Apps).
          </p>
        </div>
      </div>
      <img
        src="/src/assets/pills.png"
        alt="Pills decoration"
        className="absolute top-0 right-0 z-10 invisible xl:visible"
      />
      <img
        src="/src/assets/icp-hero.png"
        alt="ICP Hero Background"
        className="w-full h-full object-cover opacity-70 absolute bottom-[25%] left-0 right-0 md:visible invisible z-0"
      />
    </div>
  );
};

export default Hero;
