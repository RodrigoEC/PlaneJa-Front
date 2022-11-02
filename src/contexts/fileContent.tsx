import { createContext, ReactElement, useContext } from "react";

const ExtractionContext = createContext({});

export const ExtractionProvider = ({ children }: {children: ReactElement}): ReactElement => {
    return (
        <ExtractionContext.Provider value={{}}>
            {children}
        </ExtractionContext.Provider>
    )
}

export const useExtractionContext = () => {
    return {...useContext(ExtractionContext)}
}