import { ReactElement } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import {
  Wrapper,
  Title,
  Data,
  Atribute,
  LoadingContainer,
} from "./SubjectData.style";

export const SubjectData = ({
  title,
  status,
}: {
  title: string;
  status: string[];
}): ReactElement => {
  const { extractionLoading } = useExtractionContext();
  const current = status[0] || "--";
  const max = status[1] || "--";

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Data>
        {extractionLoading ? <Loading /> : current}/{extractionLoading ? <Loading /> : max}
      </Data>
      <Atribute>créditos</Atribute>
    </Wrapper>
  );
};

SubjectData.defaultProps = {
  current: 0,
  max: "--",
};

export const Loading = () => {
  return (
    <LoadingContainer>
      <span>-</span>
      <span>-</span>
    </LoadingContainer>
  );
};
