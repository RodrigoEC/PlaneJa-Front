import { ReactElement } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import {
  Wrapper,
  Title,
  Data,
  Atribute,
  LoadingContainer,
} from "./SubjectData.style";
import { useModalContext } from "../../contexts/modal";

export const SubjectData = ({
  title,
  status,
  type,
}: {
  title: string;
  type: string;
  status: string[];
}): ReactElement => {
  const { extractionLoading } = useExtractionContext();
  const { handleChangeContent } = useModalContext();
  const current = status[0] || "--";
  const max = status[1] || "--";

  console.log(title)

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Data>
        {extractionLoading ? <Loading /> : current}/{extractionLoading ? <Loading /> : max}
      </Data>
      <Atribute onClick={() => handleChangeContent(type)}>detalhar</Atribute>
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
