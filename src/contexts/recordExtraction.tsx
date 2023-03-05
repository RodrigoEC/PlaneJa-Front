import { createContext, ReactElement, useContext, useState } from "react";
import { extractRecord } from "../service/api";
import {
  defaultRecord,
  defaultSemester,
  Record,
  Semester,
} from "../util/interfaces";
import {
  defaultFunction,
  getLocalStorage,
  handleLocalStorageStateUpdate,
  setLocalStorage,
} from "../util/util";

interface ExtratedContent {
  loading: boolean;
  setLoading: Function;
  file: any;
  setFile: Function;
  studentRecord: Record;
  setStudentRecord: Function;
  extractData: Function;
  error: { code: number | string; error: boolean };
  setError: Function;
  enrollments: string[][];
  setEnrollments: Function;
  availableSubjects: string[];
  setAvailableSubjects: Function;
  semester: Semester;
  setSemester: Function;
}

const ExtractionContext = createContext<ExtratedContent>({
  loading: false,
  setLoading: defaultFunction,
  file: null,
  setFile: defaultFunction,
  studentRecord: defaultRecord,
  setStudentRecord: defaultFunction,
  extractData: defaultFunction,
  error: { code: 200, error: false },
  setError: defaultFunction,
  enrollments: [],
  setEnrollments: defaultFunction,
  availableSubjects: [],
  setAvailableSubjects: defaultFunction,
  semester: defaultSemester,
  setSemester: defaultFunction,
});

export const RecordExtractionProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ code: number | string; error: boolean }>(
    { code: 200, error: false }
  );
  const [studentRecord, setStudentRecord] = useState<Record>(
    getLocalStorage("planeja@record", defaultRecord)
  );

  const [enrollments, setEnrollments] = useState<string[][]>(
    getLocalStorage("planeja@enrollments", [])
  );
  const [availableSubjects, setAvailableSubjects] = useState<string[]>(
    getLocalStorage("planeja@available_subjects", [])
  );
  const [semester, setSemester] = useState<Semester>(
    getLocalStorage("planeja@semester", defaultSemester)
  );

  const extractData = async (file: File): Promise<{ record: Record }> => {
    setLoading(true);
    const form = new FormData();
    form.append("file", file);

    const [studentInfo, statusCode] = await extractRecord(form);
    setError({
      code: statusCode,
      error: statusCode !== 200 && statusCode !== 206,
    });

    handleLocalStorageStateUpdate(
      "planeja@record",
      setStudentRecord,
      studentInfo.record
    );

    const enrollmentData = studentInfo.enrollment_info;

    handleLocalStorageStateUpdate(
      "planeja@semester",
      setSemester,
      enrollmentData.semester
    );

    handleLocalStorageStateUpdate(
      "planeja@enrollments",
      setEnrollments,
      enrollmentData.enrollments
    );

    handleLocalStorageStateUpdate(
      "planeja@available_subjects",
      setAvailableSubjects,
      enrollmentData.subjects_available
    );

    setLoading(false);
    return studentInfo;
  };

  const value = {
    loading,
    setLoading,
    file,
    setFile,
    studentRecord,
    setStudentRecord,
    extractData,
    error,
    setError,
    enrollments,
    setEnrollments,
    availableSubjects,
    setAvailableSubjects,
    semester,
    setSemester,
  };

  return (
    <ExtractionContext.Provider value={value}>
      {children}
    </ExtractionContext.Provider>
  );
};
export const useRecordExtractionContext = () => {
  return { ...useContext(ExtractionContext) };
};
