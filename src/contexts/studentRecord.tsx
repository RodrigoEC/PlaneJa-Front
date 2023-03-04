import { createContext, ReactElement, useContext, useState } from "react";
import { extractRecord } from "../service/api";
import { defaultRecord, Record } from "../util/interfaces";
import { defaultFunction, getLocalStorage } from "../util/util";

interface ExtratedContent {
  loading: boolean;
  setLoading: Function;
  file: any;
  setFile: Function;
  studentRecord: Record;
  setStudentRecord: Function;
  extractData: Function;
  error: boolean;
  setError: Function;
}

const ExtractionContext = createContext<ExtratedContent>({
  loading: false,
  setLoading: defaultFunction,
  file: null,
  setFile: defaultFunction,
  studentRecord: defaultRecord,
  setStudentRecord: defaultFunction,
  extractData: defaultFunction,
  error: false,
  setError: defaultFunction,
});

export const StudentRecordProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [studentRecord, setStudentRecord] = useState<Record>(
    getLocalStorage("planeja@record", defaultRecord)
  );

  const extractData = async (file: File): Promise<Record> => {
    setLoading(true);
    const form = new FormData();
    form.append("file", file);

    const [studentRecord, statusCode] = await extractRecord(form);
    setError(statusCode !== 201);

    setStudentRecord(studentRecord);
    localStorage.setItem("planeja@record", JSON.stringify(studentRecord));
    setLoading(false);
    return studentRecord;
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
  };

  return (
    <ExtractionContext.Provider value={value}>
      {children}
    </ExtractionContext.Provider>
  );
};
export const useStudentRecordContext = () => {
  return { ...useContext(ExtractionContext) };
};
