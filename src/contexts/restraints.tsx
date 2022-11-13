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
  studentSubjects: string[];
  setStudentSubjects: Function;
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
  studentSubjects: [],
  setStudentSubjects: defaultFunction,
});

export const RestraintsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [restraintError, setRestraintError] = useState(false);
  const [semester, setSemester] = useState(
    JSON.parse(localStorage.getItem("planeja@semester") || JSON.stringify(""))
  );
  const [numEssentialSubjects, setNumEssentialSubjects] = useState(
    Number(localStorage.getItem("planeja@num_subjects")) || 5
  );
  const [essentialSubjects, setEssentialSubjects] = useState(
    JSON.parse(
      localStorage.getItem("planeja@essential_subjects") || JSON.stringify([])
    )
  );
  const [subjects, setSubjects] = useState(
    JSON.parse(localStorage.getItem("planeja@subjects") || JSON.stringify([]))
  );
  const [studentSubjects, setStudentSubjects] = useState(
    JSON.parse(
      localStorage.getItem("planeja@student_subjects") || JSON.stringify([])
    )
  );

  useEffect(() => {
    const getData = async () => {
      const [data, status] = await getSemesterSubjects("Ciência da computação");
      localStorage.setItem("planeja@subjects", JSON.stringify(data.classes));
      setSubjects(data.classes);
      localStorage.setItem("planeja@semester", data.semester);
      setSemester(data.semester);

      if (status !== 201) setRestraintError(true);
    };

    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "planeja@essential_subjects",
      JSON.stringify(essentialSubjects)
    );
  }, [essentialSubjects]);

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
    studentSubjects,
    setStudentSubjects,
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
