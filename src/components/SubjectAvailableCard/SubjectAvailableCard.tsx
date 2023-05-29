import { ReactElement, useCallback, useState } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Subject } from "../../contexts/restraints.interfaces";
import { colors } from "../../util/colors";
import { capitalize } from "../../util/util";
import { Button, InnerContainer, Wrapper } from "./SubjectAvailableCard.styles";

export const SubjectAvailableCard = ({
  variant,
  subject,
}: {
  variant: string;
  subject: Subject;
}): ReactElement => {
  const {
    numEssentialSubjects,
    availableSubjects,
  } = useRestraintsContext();
  const { name, class_num, schedule } = subject;
  const [hasSubject, setHasSubject] = useState<boolean>(false);

  const onClick = useCallback((): void => {
  }, []);

  return (
    <Wrapper>
      <InnerContainer></InnerContainer>
      <Button>Adicionar</Button>
    </Wrapper>
  );
};
