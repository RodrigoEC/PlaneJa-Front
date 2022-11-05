import { ReactElement } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { InputNumber, Text, Wrapper } from "./styles";

export const SubjectInput = (): ReactElement => {
  const { numClasses, setNumClasses } = useRestraintsContext();

  return (
    <Wrapper>
      <Text>Qtd.:</Text>
      <InputNumber
        type="number"
        defaultValue={numClasses}
        onChange={(e) => setNumClasses(e.target.value)}
      />
      <Text>cadeiras</Text>
    </Wrapper>
  );
};
