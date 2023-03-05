import { createContext, ReactElement, useContext, useState } from "react";
import { extractRecord } from "../service/api";
import {
  defaultRecord,
  defaultSemester,
  Record,
  Semester,
} from "../util/interfaces";
import { defaultFunction, getLocalStorage } from "../util/util";

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

  const [enrollments, setEnrollments] = useState<string[][]>([]);
  const [availableSubjects, setAvailableSubjects] = useState<string[]>([]);
  const [semester, setSemester] = useState<Semester>(defaultSemester);

  const extractData = async (file: File): Promise<{ record: Record }> => {
    setLoading(true);
    const form = new FormData();
    form.append("file", file);

    const [studentInfo, statusCode] = await extractRecord(form);
    setError({
      code: statusCode,
      error: statusCode !== 200 && statusCode !== 206,
    });

    setStudentRecord(studentInfo.record);
    const {
      enrollments,
      subjects_available,
      semester: classesOffered,
    } = studentInfo.enrollment_info;
    setEnrollments(enrollments);
    setAvailableSubjects(subjects_available);
    setSemester(classesOffered);

    localStorage.setItem("planeja@record", JSON.stringify(studentInfo.record));
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
export const useRecordContext = () => {
  return { ...useContext(ExtractionContext) };
};
