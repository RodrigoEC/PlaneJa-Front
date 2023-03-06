import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { getLocalStorage, setLocalStorage } from "../util/util";
import { Subject } from "./restraints.interfaces";

interface ExtratedContent {
  numEssentialSubjects: number;
  setNumEssentialSubjects: Function;
  essentialSubjects: Subject[];
  setEssentialSubjects: Function;
  subjectsBackup: Subject[];
  setSubjectsBackup: Function;
  availableSubjects: Subject[];
  setAvailableSubjects: Function;
}

const defaultFunction = () => {};
const RestraintsContext = createContext<ExtratedContent>({
  numEssentialSubjects: 5,
  setNumEssentialSubjects: defaultFunction,
  essentialSubjects: [],
  setEssentialSubjects: defaultFunction,
  subjectsBackup: [],
  setSubjectsBackup: defaultFunction,
  availableSubjects: [],
  setAvailableSubjects: defaultFunction,
});

export const RestraintsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [numEssentialSubjects, setNumEssentialSubjects] = useState<number>(
    getLocalStorage("planeja@num_subjects", 5)
  );
  
  const [availableSubjects, setAvailableSubjects] = useState<Subject[]>(
    getLocalStorage("planeja@available_subjects", [])
  );

  const [essentialSubjects, setEssentialSubjects] = useState<Subject[]>(
    getLocalStorage("planeja@essential_subjects", [])
  );

  const [subjectsBackup, setSubjectsBackup] = useState<Subject[]>(
    getLocalStorage("planeja@essential_subjects", [])
  );
  

  useEffect(() => {
    console.log(essentialSubjects)
    setLocalStorage("planeja@essential_subjects", subjectsBackup);
  }, [subjectsBackup]);

  const value = {
    numEssentialSubjects,
    setNumEssentialSubjects,
    essentialSubjects,
    setEssentialSubjects,
    subjectsBackup,
    setSubjectsBackup,
    availableSubjects,
    setAvailableSubjects,
  };

  return (
    <RestraintsContext.Provider value={value}>
      {children}
    </RestraintsContext.Provider>
  );
};

export const useRestraintsContext = () => {
  return { ...useContext(RestraintsContext) };
};
