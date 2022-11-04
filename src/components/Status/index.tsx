import { ReactElement } from "react";
import { StatusItem } from "./StatusItem";
import { Wrapper } from "./styles";

interface Progress {
  mandatory: string[];
  optional: string[];
  complementary: string[];
}

export const Status = ({ progress }: { progress: Progress }): ReactElement => {
  return (
    <Wrapper>
      <StatusItem title="Obrigatórias" status={progress.mandatory} />
      <StatusItem title="Optativas" status={progress.optional} />
      <StatusItem title="Complementares" status={progress.complementary} />
    </Wrapper>
  );
};

Status.defaultProps = {
  progress: {
    mandatory: [],
    optional: [],
    complementary: [],
  },
};
