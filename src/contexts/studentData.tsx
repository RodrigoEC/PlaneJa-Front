import { createContext, ReactElement, useContext, useState } from "react";
import {
  defaultFunction,
  getLocalStorage,
  handleLocalStorageStateUpdate,
} from "../util/util";
import { Subject } from "./restraints.interfaces";
import { defaultStudentRecord, StudentRecord } from "./studentData.interfaces";

interface ExtratedContent {
  studentRecord: StudentRecord;
  setStudentRecord: Function;
  semester: string;
  setSemester: Function;
  enrollments: Array<Subject[]>;
  setEnrollments: Function;
  fillStudentData: (
    studentRecord: StudentRecord,
    semester: string,
    enrollmentList: Array<Subject[]>
  ) => void;
}

const StudentDataContext = createContext<ExtratedContent>({
  studentRecord: defaultStudentRecord,
  setStudentRecord: defaultFunction,
  semester: "",
  setSemester: defaultFunction,
  enrollments: [],
  setEnrollments: defaultFunction,
  fillStudentData: (
    studentRecord: StudentRecord,
    semester: string,
    enrollmentList: Array<Subject[]>
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
  const [enrollments, setEnrollments] = useState<Array<Subject[]>>(
    getLocalStorage("planeja@enrollments", [])
  );

  const fillStudentData = (
    studentRecord: StudentRecord,
    semester: string,
    enrollmentList: Array<Subject[]>
  ) => {
    handleLocalStorageStateUpdate("planeja@semester", setSemester, semester);

    handleLocalStorageStateUpdate(
      "planeja@student_record",
      setStudentRecord,
      studentRecord
    );

    handleLocalStorageStateUpdate(
      "planeja@enrollments",
      setEnrollments,
      enrollmentList
    );
  };

  const value = {
    studentRecord,
    setStudentRecord,
    enrollments,
    setEnrollments,
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
