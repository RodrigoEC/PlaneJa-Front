import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { getLocalStorage } from "../util/util";
import { Subject } from "./restraints.interfaces";

interface ExtratedContent {
  numEssentialSubjects: number;
  setNumEssentialSubjects: Function;
  availableSubjects: Subject[];
  setAvailableSubjects: Function;
  filteredSubjects: Subject[];
  setFilteredSubjects: Function;
}

const defaultFunction = () => {};
const RestraintsContext = createContext<ExtratedContent>({
  numEssentialSubjects: 5,
  setNumEssentialSubjects: defaultFunction,
  availableSubjects: [],
  setAvailableSubjects: defaultFunction,
  filteredSubjects: [],
  setFilteredSubjects: defaultFunction,
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

  const [filteredSubjects, setFilteredSubjects] = useState(availableSubjects);

  useEffect(() => {
    setFilteredSubjects(availableSubjects);
  }, []);

  const value = {
    numEssentialSubjects,
    setNumEssentialSubjects,
    availableSubjects,
    setAvailableSubjects,
    filteredSubjects,
    setFilteredSubjects,
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
