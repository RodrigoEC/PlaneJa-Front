export const defaultScheduleList = [
  {
    seg: { name: "segunda-feira", subs: [] },
    ter: { name: "terça-feira", subs: [] },
    quar: { name: "quarta-feira", subs: [] },
    qui: { name: "quinta-feira", subs: [] },
    sex: { name: "sexta-feira", subs: [] },
    sab: { name: "sábado", subs: [] },
  },
];

export const scheduleTemplate = [
  { name: "segunda-feira", num: "2" },
  { name: "terça-feira", num: "3" },
  { name: "quarta-feira", num: "4" },
  { name: "quinta-feira", num: "5" },
  { name: "sexta-feira", num: "6" },
  { name: "sábado", num: "7" },
];

export type DayOfTheWeek = "2" | "3" | "4" | "5" | "6" | "7";
export const numberToDay = {
  "2": "Seg.",
  "3": "Ter.",
  "4": "Quar.",
  "5": "Qui.",
  "6": "Sex.",
  "7": "Sab",
};

export const defaultCurrentSchedule = () => {
  return Array.from({ length: 6 }, () => Array.from({ length: 8 }, () => null))
}

export const RomanNumerals = ["I", "II", "III", "IV", "V"]