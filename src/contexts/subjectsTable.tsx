import { createContext, ReactElement, useContext, useState } from "react";

export interface SubjectContent {
  title: string;
  variant: string;
  position: number;
  locked: boolean;
}

export interface SubjectsTableContent {
  seg: { name: string; subs: SubjectContent[] };
  ter: { name: string; subs: SubjectContent[] };
  quar: { name: string; subs: SubjectContent[] };
  qui: { name: string; subs: SubjectContent[] };
  sex: { name: string; subs: SubjectContent[] };
  sab: { name: string; subs: SubjectContent[] };
}

const defaultSubjects = {
  seg: {
    name: "segunda-feira",
    subs: [{ title: "Fundamentos de matemática para ciência da computação II", variant: 'cyan', position: 2, locked: true }],
  },
  ter: { name: "terça-feira", subs: [] },
  quar: { name: "quarta-feira", subs: [] },
  qui: { name: "quinta-feira", subs: [] },
  sex: { name: "sexta-feira", subs: [] },
  sab: { name: "sábado", subs: [] },
};

const SubjectsTableContext =
  createContext<SubjectsTableContent>(defaultSubjects);

export const SubjectsTableProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [subjects, setSubjects] = useState(defaultSubjects);

  const value = {
    ...subjects,
    setSubjects,
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
