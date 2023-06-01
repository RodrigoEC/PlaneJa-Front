import { createContext, ReactElement, useContext, useState } from "react";
import {
  defaultFunction,
  getLocalStorage,
  handleLocalStorageStateUpdate,
} from "../util/util";
import { Subject } from "./weeklySchedule.interfaces";
import { defaultStudentRecord, StudentRecord } from "./studentData.interfaces";

interface ExtratedContent {
  studentRecord: StudentRecord;
  setStudentRecord: Function;
  semester: string;
  setSemester: Function;
  fillStudentData: (
    studentRecord: StudentRecord,
    semester: string,
  ) => void;
}

const StudentDataContext = createContext<ExtratedContent>({
  studentRecord: defaultStudentRecord,
  setStudentRecord: defaultFunction,
  semester: "",
  setSemester: defaultFunction,
  fillStudentData: (
    studentRecord: StudentRecord,
    semester: string,
  ) => {},
});

export const StudentDataProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [studentRecord, setStudentRecord] = useState<StudentRecord>(
    getLocalStorage("planeja@student_record", defaultStudentRecord)
  );
  const [semester, setSemester] = useState<string>(
    getLocalStorage("planeja@semester", "")
  );

  const fillStudentData = (
    studentRecord: StudentRecord,
    semester: string,
  ) => {
    handleLocalStorageStateUpdate("planeja@semester", setSemester, semester);

    handleLocalStorageStateUpdate(
      "planeja@student_record",
      setStudentRecord,
      studentRecord
    );
  };

  const value = {
    studentRecord,
    setStudentRecord,
    semester,
    setSemester,
    fillStudentData,
  };

  return (
    <StudentDataContext.Provider value={value}>
      {children}
    </StudentDataContext.Provider>
  );
};
export const useStudentDataContext = () => {
  return { ...useContext(StudentDataContext) };
};
