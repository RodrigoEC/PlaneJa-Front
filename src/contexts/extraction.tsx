import { createContext, ReactElement, useContext, useState } from "react";
import { extractRecord } from "../service/api";
import { defaultFunction } from "../util/util";
import { defaultExtractionResponse, ErrorInterface, ExtractionResponse } from "./extraction.interfaces";

export interface ExtratedContent {
  extractionLoading: boolean;
  setExtractionLoading: Function;
  file: any;
  setFile: Function;
  extractData: (file: File) => Promise<[ExtractionResponse, number]>;
  error: ErrorInterface;
  setError: Function;
}

const ExtractionContext = createContext<ExtratedContent>({
  extractionLoading: false,
  setExtractionLoading: defaultFunction,
  file: null,
  setFile: defaultFunction,
  extractData: async (file: File) => [defaultExtractionResponse, 200],
  error: { code: 200, warn: false },
  setError: defaultFunction,
});

export const ExtractionProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [file, setFile] = useState<File | null>(null);
  const [extractionLoading, setExtractionLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorInterface>({ code: 200, warn: false });

  const extractData = async (file: File): Promise<[ExtractionResponse, number]> => {
    setExtractionLoading(true);
    const form = new FormData();
    form.append("file", file);

    const [extractedInfo, statusCode] = await extractRecord(form);
    
    setError({
      code: statusCode,
      warn: statusCode !== 200 && statusCode !== 206,
    });

    setExtractionLoading(false);
    return [extractedInfo, statusCode];
  };

  const value = {
    extractionLoading,
    setExtractionLoading,
    file,
    setFile,
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
