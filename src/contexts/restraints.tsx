import { createContext, ReactElement, useContext, useState } from "react";

interface ExtratedContent {
  numClasses: number;
  setNumClasses: Function;
  forcedClasses: any;
  setForcedClasses: Function;
  recommendedSubjects: any;
  setRecommendedSubjects: Function;
}

const defaultFunction = () => {};
const RestraintsContext = createContext<ExtratedContent>({
  numClasses: 5,
  setNumClasses: defaultFunction,
  forcedClasses: [],
  setForcedClasses: defaultFunction,
  recommendedSubjects: [],
  setRecommendedSubjects: defaultFunction,
});

export const RestraintsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [numClasses, setNumClasses] = useState(5);
  const [forcedClasses, setForcedClasses] = useState([])
  const [recommendedSubjects, setRecommendedSubjects] = useState([])

  const value = {
    numClasses,
    setNumClasses,
    forcedClasses,
    setForcedClasses,
    recommendedSubjects,
    setRecommendedSubjects
  };

  return (
    <RestraintsContext.Provider value={value}>
      {children}
    </RestraintsContext.Provider>
  );
};

export const useRestraintsContext = () => {
  return { ...useContext(RestraintsContext) };
};
