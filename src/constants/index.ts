import type { EventInfo } from "../types";

export const EVENT_INFO: EventInfo[] = [
  {
    label: "Дати",
    value: "1 липня – 25 липня 2025",
    colSpan: "col-span-full md:col-span-5",
  },
  {
    label: "Кінцевий термін подачі робіт",
    value: "26 липня 2025",
    colSpan: "col-span-full md:col-span-6",
  },
  {
    label: "Завершення реєстрації",
    value: "23 липня 2025",
    colSpan: "col-span-full md:col-span-6",
  },
  {
    label: "Місце проведення",
    value: "100% онлайн",
    colSpan: "col-span-full md:col-span-5",
  },
  {
    label: "Наступний раунд",
    value: "Топ 50% проходять до Національного раунду (серпень 2025)",
    colSpan: "col-span-full md:col-span-11",
  },
];

export const DORAHACKS_URL =
  "https://dorahacks.io/hackathon/wchl25-qualification-round/detail";

export const PRIZE_DATA = [
  {
    amount: "$30,000",
    title: "Кваліфікаційний раунд",
    description: "по всіх країнах за перші результати та залучення",
    height: "lg:h-30 h-auto md:h-50",
  },
  {
    amount: "$50,000",
    title: "Національний раунд",
    description: "по всіх країнах з баунті за технічні досягнення та інновації",
    height: "lg:h-50 h-auto md:h-50",
  },
  {
    amount: "$70,000",
    title: "Регіональний раунд",
    description:
      "по регіонах для лідерів, які демонструють технічні навички та відповідність продукту ринку",
    height: "lg:h-70 h-auto md:h-50",
  },
  {
    amount: "$150,000",
    title: "Глобальний фінал",
    description:
      "включно зі спеціальними нагородами за інновації та вплив на екосистему",
    height: "lg:h-90 h-auto md:h-50",
  },
];
