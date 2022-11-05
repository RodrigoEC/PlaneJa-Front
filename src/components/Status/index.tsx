import { ReactElement } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { StatusItem } from "./StatusItem";
import { Wrapper } from "./styles";

export const Status = (): ReactElement => {
  const { studentRecord } = useExtractionContext();
  const { status } = studentRecord

  return (
    <Wrapper>
      <StatusItem title="Obrigatórias" status={status.mandatory} />
      <StatusItem title="Optativas" status={status.optative} />
      <StatusItem title="Complementares" status={status.complementary} />
    </Wrapper>
  );
};