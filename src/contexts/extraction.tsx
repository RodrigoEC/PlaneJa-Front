import { createContext, ReactElement, useContext, useState } from "react";

interface ExtratedContent {
  loading: boolean;
  setLoading: Function;
  file: any;
  setFile: Function;
  classesOffered: string;
  setClassesOffered: Function;
  classesSemester: string;
  setClassesSemester: Function;
}

const defaultFunction = () => {}
const ExtractionContext = createContext<ExtratedContent>({
  loading: false,
  setLoading: defaultFunction,
  file: null,
  setFile: defaultFunction,
  classesOffered: '',
  setClassesOffered: defaultFunction,
  classesSemester: '',
  setClassesSemester: defaultFunction
});


export const ExtractionProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [classesOffered, setClassesOffered] = useState('');
  const [classesSemester, setClassesSemester] = useState('');

  const value = {
    loading,
    setLoading,
    file,
    setFile,
    classesOffered,
    setClassesOffered,
    classesSemester,
    setClassesSemester
  };

  return (
    <ExtractionContext.Provider value={value}>
      {children}
    </ExtractionContext.Provider>
  );
};

export const useExtractionContext = () => {
  return { ...useContext(ExtractionContext)};
};
