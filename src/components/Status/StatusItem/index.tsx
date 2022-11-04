import { ReactElement } from "react";
import { useExtractionContext } from "../../../contexts/extraction";
import { Wrapper, Title, Data, Atribute, Loading } from "./styles";

export const StatusItem = ({
  title,
  current,
  max,
}: {
  title: string;
  current: number;
  max: number;
}): ReactElement => {
  const { loading } = useExtractionContext();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Data>
        {loading ? (
          <Loading>
            <span>-</span>
            <span>-</span>
          </Loading>
        ) : (
          current
        )}
        /{max}
      </Data>
      <Atribute>créditos</Atribute>
    </Wrapper>
  );
};

StatusItem.defaultProps = {
  current: 0,
  max: "--",
};
