import { ChangeEvent, ReactElement, useCallback } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { InputNumber, Text, Wrapper } from "./NumInput.style";

export const NumInput = (): ReactElement => {
  const {
    numEssentialSubjects,
    setNumEssentialSubjects,
    setEssentialSubjects,
  } = useRestraintsContext();

  const onBlur = useCallback(() => {
    let numSubjects = numEssentialSubjects;
    if (numEssentialSubjects < 4) numSubjects = 4;
    else if (numEssentialSubjects > 7) numSubjects = 7;

    localStorage.setItem("planeja@num_subjects", String(numSubjects));
    setNumEssentialSubjects(numSubjects);
    setEssentialSubjects((previous: string[]) =>
      previous.slice(0, numSubjects)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numEssentialSubjects]);

  return (
    <Wrapper>
      <Text>Qtd.:</Text>
      <InputNumber
        min="4"
        max="7"
        type="number"
        value={numEssentialSubjects}
        onBlur={onBlur}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setNumEssentialSubjects(event.target.value)
        }
      />
      <Text>cadeiras</Text>
    </Wrapper>
  );
};
