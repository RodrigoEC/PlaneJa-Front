import { createContext, ReactElement, useContext, useState } from "react";
import { extractRecord } from "../service/api";
import { defaultRecord, Record } from "../service/types";
import { getLocalStorage } from "../util/util";

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

const defaultFunction = () => {};
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

export const ExtractionProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [studentRecord, setStudentRecord] = useState(
    getLocalStorage("planeja@record", defaultRecord)
  );

  const extractData = async (file: File) => {
    setLoading(true);
    const form = new FormData();
    form.append("file", file);

    const [response, statusCode] = await extractRecord(form);
    if (statusCode !== 201) setError(true);
    else setError(false);

    setStudentRecord(response);
    localStorage.setItem("planeja@record", JSON.stringify(response));
    setLoading(false);
    return response;
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

export const useExtractionContext = () => {
  return { ...useContext(ExtractionContext) };
};
