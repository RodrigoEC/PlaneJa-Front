import { ReactElement } from "react";
import { Container, Wrapper, InnerWrapper, ProgressValue, Title } from "./styles";

export const Progress = ({ progress }: { progress: number }): ReactElement => {
  return (
    <Container>
    <Title>Cadeiras cursadas</Title>
    <Wrapper>
      <InnerWrapper progress={progress * 100}>
        <ProgressValue>{progress * 100}%</ProgressValue>
      </InnerWrapper>
    </Wrapper>
    </Container>
  );
};

Progress.defaultProps = {
  progress: 0.20
}