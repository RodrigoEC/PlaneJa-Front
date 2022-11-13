import { ReactElement, useEffect } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { InputNumber, Text, Wrapper } from "./styles";

export const SubjectInput = (): ReactElement => {
  const { numEssentialSubjects, setNumEssentialSubjects, setEssentialSubjects } = useRestraintsContext();

  useEffect(() => {
    let numSubjects = numEssentialSubjects
    if (numEssentialSubjects < 4) numSubjects = 4
    else if (numEssentialSubjects > 7) numSubjects = 7

    setNumEssentialSubjects(numSubjects)

    setEssentialSubjects((previous: string[]) => previous.slice(0, numSubjects))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numEssentialSubjects])

  return (
    <Wrapper>
      <Text>Qtd.:</Text>
      <InputNumber
        min="4"
        max="7"
        type="number"
        defaultValue={5}
        onChange={(e) => setNumEssentialSubjects(e.target.value)}
      />
      <Text>cadeiras</Text>
    </Wrapper>
  );
};
