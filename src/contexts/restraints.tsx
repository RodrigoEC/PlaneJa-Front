import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSemesterSubjects } from "../service/api";

interface ExtratedContent {
  restraintError: boolean;
  setRestraintError: Function;
  semester: string;
  setSemester: Function;
  numEssentialSubjects: number;
  setNumEssentialSubjects: Function;
  essentialSubjects: any;
  setEssentialSubjects: Function;
  subjects: string[];
  setSubjects: Function;
}

const defaultFunction = () => {};
const RestraintsContext = createContext<ExtratedContent>({
  restraintError: false,
  setRestraintError: defaultFunction,
  semester: "",
  setSemester: defaultFunction,
  numEssentialSubjects: 5,
  setNumEssentialSubjects: defaultFunction,
  essentialSubjects: [],
  setEssentialSubjects: defaultFunction,
  subjects: [],
  setSubjects: defaultFunction,
});

export const RestraintsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [restraintError, setRestraintError] = useState(false);
  const [semester, setSemester] = useState("");
  const [numEssentialSubjects, setNumEssentialSubjects] = useState(5);
  const [essentialSubjects, setEssentialSubjects] = useState([]);
  const [subjects, setSubjects] = useState([] as string[]);

  useEffect(() => {
    const getData = async () => {
      const [data, status] = await getSemesterSubjects("Ciência da computação");
      console.log(data)
      setSubjects(data.classes);
      setSemester(data.semester);

      if (status !== 201) setRestraintError(true);
    };

    getData();
  }, []);

  const value = {
    restraintError,
    setRestraintError,
    semester,
    setSemester,
    numEssentialSubjects,
    setNumEssentialSubjects,
    essentialSubjects,
    setEssentialSubjects,
    subjects,
    setSubjects,
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
