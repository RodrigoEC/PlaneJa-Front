import { createContext, ReactElement, useContext, useState } from "react";

interface ExtratedContent {
  file: any;
  setFile: Function;
  classesOffered: string;
  setClassesOffered: Function;
  classesSemester: string;
  setClassesSemester: Function;
}
const ExtractionContext = createContext<ExtratedContent>({
  file: null,
  setFile: () => {},
  classesOffered: '',
  setClassesOffered: () => {},
  classesSemester: '',
  setClassesSemester: () => {}
});


export const ExtractionProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [file, setFile] = useState(null);
  const [classesOffered, setClassesOffered] = useState('');
  const [classesSemester, setClassesSemester] = useState('');

  const value = {
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
