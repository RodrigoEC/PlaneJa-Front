import { ReactElement } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { InputNumber, Text, Wrapper } from "./styles";

export const SubjectInput = (): ReactElement => {
  const { numEssentialSubjects, setNumEssentialSubjects } = useRestraintsContext();

  return (
    <Wrapper>
      <Text>Qtd.:</Text>
      <InputNumber
        min="4"
        max="7"
        type="number"
        defaultValue={numEssentialSubjects}
        onChange={(e) => setNumEssentialSubjects(e.target.value)}
      />
      <Text>cadeiras</Text>
    </Wrapper>
  );
};
