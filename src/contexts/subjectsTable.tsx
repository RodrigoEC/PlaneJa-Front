import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from "react";

export interface SubjectContent {
  title: string;
  variant: string;
  position: number;
  locked: boolean;
}

export interface WeekSchedule {
  seg: { name: string; subs: Array<SubjectContent | null> };
  ter: { name: string; subs: Array<SubjectContent | null> };
  quar: { name: string; subs: Array<SubjectContent | null> };
  qui: { name: string; subs: Array<SubjectContent | null> };
  sex: { name: string; subs: Array<SubjectContent | null> };
  sab: { name: string; subs: Array<SubjectContent | null> };
}

export interface SubjectsTableContent {
  schedules: WeekSchedule[];
  setSchedules: Function;
  currentSchedule: WeekSchedule;
  setCurrentSchedule: Function;
  currentScheduleIndex: number;
  setCurrentScheduleIndex: Function;
  loading: boolean;
  setLoading: Function;
  nextSchedule: Function;
  previousSchedule: Function;
  changeSchedule: Function;
}

const defaultSubjects = {
  seg: { name: "segunda-feira", subs: Array(8).fill(null) },
  ter: { name: "terça-feira", subs: Array(8).fill(null) },
  quar: { name: "quarta-feira", subs: Array(8).fill(null) },
  qui: { name: "quinta-feira", subs: Array(8).fill(null) },
  sex: { name: "sexta-feira", subs: Array(8).fill(null) },
  sab: { name: "sábado", subs: Array(8).fill(null) },
};

const u = {
  seg: {
    name: "segunda-feira",
    subs: [
      null,
      {
        title: "Fundamentos de matemática para ciência da computação II",
        variant: "cyan",
        position: 2,
        locked: true,
      },
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  ter: { name: "terça-feira", subs: Array(8).fill(null) },
  quar: { name: "quarta-feira", subs: Array(8).fill(null) },
  qui: { name: "quinta-feira", subs: Array(8).fill(null) },
  sex: { name: "sexta-feira", subs: Array(8).fill(null) },
  sab: { name: "sábado", subs: Array(8).fill(null) },
};

const SubjectsTableContext = createContext<SubjectsTableContent>({
  schedules: [],
  setSchedules: () => {},
  currentSchedule: defaultSubjects,
  setCurrentSchedule: () => {},
  currentScheduleIndex: 0,
  setCurrentScheduleIndex: () => {},
  loading: false,
  setLoading: () => {},
  nextSchedule: () => {},
  previousSchedule: () => {},
  changeSchedule: () => {},
});

export const SubjectsTableProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [schedules, setSchedules] = useState([
    JSON.parse(JSON.stringify(defaultSubjects)),
    u,
  ]);
  const [loading, setLoading] = useState(false);
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);
  const [currentSchedule, setCurrentSchedule] = useState(defaultSubjects);

  const changeSchedule = useCallback(
    (id: number) => {
      setLoading(true);
      setCurrentScheduleIndex(id);
      const newSchedules: WeekSchedule = { ...defaultSubjects };

      Object.keys(schedules[id]).forEach((value: string) => {
        const subjects = new Array(8).fill(null);
        schedules[id][value as keyof WeekSchedule].subs.forEach(
          (subElement: SubjectContent | null) => {
            if (subElement !== null) {
              subjects[subElement.position] = subElement;
            }
          }
        );

        newSchedules[value as keyof WeekSchedule].subs = subjects;
      });

      setCurrentSchedule(newSchedules);
      setTimeout(() => setLoading(false), 1000);
    },
    [currentScheduleIndex]
  );

  const nextSchedule = () => {
    if (currentScheduleIndex < schedules.length - 2) {
      changeSchedule(currentScheduleIndex + 1);
    }
  };

  const previousSchedule = () => {
    if (currentScheduleIndex > 0) {
      changeSchedule(currentScheduleIndex - 1);
    }
  };

  const value = {
    schedules,
    setSchedules,
    loading,
    setLoading,
    currentSchedule,
    setCurrentSchedule,
    currentScheduleIndex,
    setCurrentScheduleIndex,
    nextSchedule,
    previousSchedule,
    changeSchedule,
  };

  return (
    <SubjectsTableContext.Provider value={value}>
      {children}
    </SubjectsTableContext.Provider>
  );
};

export const useSubjectsTableContext = () => {
  return { ...useContext(SubjectsTableContext) };
};

// const defaultSubjects = {
//   seg: {
//     name: "segunda-feira",
//     subs: [
//       {
//         title: "Fundamentos de matemática para ciência da computação II",
//         variant: "cyan",
//         position: 2,
//         locked: true,
//       },
//       {
//         title: "Programação II",
//         variant: "green",
//         position: 0,
//         locked: false,
//       },
//       {
//         title: "laboratório de Organização e arquitetura de computadores",
//         variant: "blue",
//         position: 1,
//         locked: false,
//       },
//       {
//         title: "Organização e arquitetura de computadores",
//         variant: "maroom",
//         position: 3,
//         locked: false,
//       },
//       {
//         title: "Organização e arquitetura de computadores",
//         variant: "red",
//         position: 4,
//         locked: false,
//       },
//       {
//         title: "Organização e arquitetura de computadores",
//         variant: "darkOrange",
//         position: 5,
//         locked: false,
//       },
//       {
//         title: "Organização e arquitetura de computadores",
//         variant: "lightOrange",
//         position: 6,
//         locked: false,
//       },
//     ],
//   },
//   ter: { name: "terça-feira", subs: [] },
//   quar: { name: "quarta-feira", subs: [] },
//   qui: { name: "quinta-feira", subs: [] },
//   sex: {
//     name: "sexta-feira",
//     subs: [
//       {
//         title: "Organização e arquitetura de computadores",
//         variant: "lightOrange",
//         position: 4,
//         locked: false,
//       },
//     ],
//   },
//   sab: { name: "sábado", subs: [] },
// };
