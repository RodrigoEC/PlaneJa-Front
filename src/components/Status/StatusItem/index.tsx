import { ReactElement } from "react";
import { useExtractionContext } from "../../../contexts/extraction";
import { Wrapper, Title, Data, Atribute, Loading } from "./styles";

export const StatusItem = ({
  title,
  status,
}: {
  title: string;
  status: string[];
}): ReactElement => {
  const { loading } = useExtractionContext();
  const current = status[0] || "--";
  const max = status[1] || "--";

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
