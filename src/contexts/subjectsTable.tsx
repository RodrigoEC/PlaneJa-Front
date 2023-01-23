import { createContext, ReactElement, useContext, useState } from "react";

export interface SubjectContent {
  title: string;
  variant: string;
  position: number;
  locked: boolean;
}

export interface WeekSchedule {
  seg: { name: string; subs: SubjectContent[] };
  ter: { name: string; subs: SubjectContent[] };
  quar: { name: string; subs: SubjectContent[] };
  qui: { name: string; subs: SubjectContent[] };
  sex: { name: string; subs: SubjectContent[] };
  sab: { name: string; subs: SubjectContent[] };
}

export interface SubjectsTableContent {
  subjects: WeekSchedule[];
  setSubjects: Function;
  currentSchedule: number;
  setCurrentSchedule: Function;
  loading: boolean;
  setLoading: Function;
  nextSchedule: Function;
  previousSchedule: Function;
  changeSchedule: Function;
}

const defaultSubjects = {
  seg: { name: "segunda-feira", subs: [] },
  ter: { name: "terça-feira", subs: [] },
  quar: { name: "quarta-feira", subs: [] },
  qui: { name: "quinta-feira", subs: [] },
  sex: { name: "sexta-feira", subs: [] },
  sab: { name: "sábado", subs: [] },
};

const u = {
  seg: { name: "segunda-feira", subs: [] },
  ter: {
    name: "terça-feira",
    subs: [
      {
        title: "Organização e arquitetura de computadores",
        variant: "lightOrange",
        position: 4,
        locked: false,
      },
    ],
  },
  quar: { name: "quarta-feira", subs: [] },
  qui: { name: "quinta-feira", subs: [] },
  sex: { name: "sexta-feira", subs: [] },
  sab: { name: "sábado", subs: [] },
};

const SubjectsTableContext = createContext<SubjectsTableContent>({
  subjects: [defaultSubjects],
  setSubjects: () => {},
  currentSchedule: 0,
  setCurrentSchedule: () => {},
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
  const [subjects, setSubjects] = useState([defaultSubjects, u]);
  const [loading, setLoading] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState(0);

  const changeSchedule = (id: number) => {
    setLoading(true);
    setCurrentSchedule(id);
    setTimeout(() => setLoading(false), 1000);
  };

  const nextSchedule = () => {
    if (currentSchedule < subjects.length - 2) {
      changeSchedule(currentSchedule + 1);
    }
  };

  const previousSchedule = () => {
    if (currentSchedule > 0) {
      changeSchedule(currentSchedule - 1);
    }
  };

  const value = {
    subjects,
    setSubjects,
    loading,
    setLoading,
    currentSchedule,
    setCurrentSchedule,
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
