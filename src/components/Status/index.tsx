import { ReactElement } from "react";
import { StatusItem } from "./StatusItem";
import { Wrapper } from "./styles";

interface Progress {
  mandatory: {
    current: number;
    max: number;
  };
  optional: {
    current: number;
    max: number;
  };
}

export const Status = ({ progress }: { progress: Progress }): ReactElement => {
  return (
    <Wrapper>
      <StatusItem title="Obrigatórias" {...progress.mandatory} />
      <StatusItem title="Optativas" {...progress.optional} />
    </Wrapper>
  );
};

Status.defaultProps = {
  progress: {
    mandatory: {
      current: 0,
      max: 130
    },
    optional: {
      current: 12,
      max: 40,
    }
  },
};
