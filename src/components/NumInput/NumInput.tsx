import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { InputNumber, Text, Wrapper } from "./NumInput.style";

export const NumInput = (): ReactElement => {
  const {
    setAvailableSubjects,
    numEssentialSubjects,
    setNumEssentialSubjects,
  } = useRestraintsContext();
  const { extractionLoading } = useExtractionContext();
  const { TableLoading } = useSubjectsTableContext();
  const [invalidInput, setInvalidInput] = useState(false);

  const onBlur = useCallback(() => {
    let numSubjects = numEssentialSubjects;
    if (numEssentialSubjects < 4) numSubjects = 4;
    else if (numEssentialSubjects > 7) numSubjects = 7;

    localStorage.setItem("planeja@num_subjects", String(numSubjects));
    setNumEssentialSubjects(numSubjects);
    setAvailableSubjects((previous: string[]) =>
      previous.slice(0, numSubjects)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numEssentialSubjects]);

  useEffect(() => {
    if (numEssentialSubjects > 7 || numEssentialSubjects < 4) {
      setInvalidInput(true);
    } else setInvalidInput(false);
  }, [numEssentialSubjects]);

  return (
    <Wrapper className={invalidInput ? "invalid" : ""}>
      <Text>Qtd.:</Text>
      <InputNumber
        aria-label="number input"
        min="4"
        max="7"
        type="number"
        disabled={TableLoading || extractionLoading}
        value={numEssentialSubjects}
        onBlur={onBlur}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setNumEssentialSubjects(event.target.value);
        }}
      />
      <Text>cadeiras</Text>
    </Wrapper>
  );
};
