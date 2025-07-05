import React from "react";
import { Header, Hero, Review, Prize } from "./components";
import { DORAHACKS_URL } from "./constants";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Review />
      <Prize />
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#1E1E1E] min-h-96 relative">
      <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-12 gap-5 relative z-10">
        <h2 className="text-3xl lg:text-6xl unbounded-700 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#70A9FF] to-[#FFFFFF] col-span-full  text-center md:text-left">
          Останнє слово
        </h2>
        <div className="flex flex-col gap-5 md:col-span-8 col-span-full">
          <p className="montserrat-400 text-white md:text-xl lg:text-2xl max-w-3xl text-center md:text-left">
            Кваліфікаційний раунд WCHL — це твій шанс створити щось справді
            вагоме і вийти на глобальний рівень. Збирай команду та працюй разом
            (жодних соло-розробників!)
          </p>
          <h3 className="text-2xl lg:text-5xl unbounded-700 leading-snug text-white mt-10  text-center md:text-left">
            LET'S BUILD!
          </h3>
        </div>
        <div className="col-span-full md:col-span-4 flex flex-col gap-5">
          <h5 className="montserrat-700 text-2xl lg:text-3xl text-white  text-center md:text-left order-2 md:order-first">
            Реєструйся вже зараз. Початок — 1 липня. Прокладай свій шлях в
            історію Web3
          </h5>
          <a
            href={DORAHACKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80 mx-auto md:mx-0 order-1"
          >
            <img
              src="/src/assets/dora-hacks.svg"
              alt="DoraHacks Registration"
              className="md:w-52 w-44 h-16"
            />
          </a>
        </div>
      </div>
      <img
        src="src/assets/footer.png"
        alt="Footer"
        className="absolute bottom-0 left-0 w-full h-full object-cover z-0"
      />
    </footer>
  );
};

export default App;
