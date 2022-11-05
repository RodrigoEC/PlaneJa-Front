import { createContext, ReactElement, useContext, useState } from "react";
import { extractRecord } from "../service/api";
import { defaultRecord, Record } from "../service/types";

interface ExtratedContent {
  loading: boolean;
  setLoading: Function;
  file: any;
  setFile: Function;
  studentRecord: Record;
  setStudentRecord: Function;
  extractData: Function;
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
});

export const ExtractionProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [studentRecord, setStudentRecord] = useState(
    JSON.parse(
      localStorage.getItem("@planeja/record") || JSON.stringify(defaultRecord)
    )
  );

  const extractData = async (file: any) => {
    const form = new FormData();
    form.append("file", file);

    const response = await extractRecord(form);
    setStudentRecord(response);
    localStorage.setItem("@planeja/record", JSON.stringify(response));
   };

  const value = {
    loading,
    setLoading,
    file,
    setFile,
    studentRecord,
    setStudentRecord,
    extractData,
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
