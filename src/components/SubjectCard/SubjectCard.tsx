import { ReactElement, useCallback, useState } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Subject } from "../../contexts/restraints.interfaces";
import { colors } from "../../util/colors";
import { capitalize } from "../../util/util";
import { About, Wrapper, Title, AboutContainer } from "./SubjectCard.styles";

export const SubjectCard = ({
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
  const title = subject.name;
  const [hasSubject, setHasSubject] = useState<boolean>(false);

  const displayedTitle =
    title.length > 35 ? title.slice(0, 23) + "..." + title.slice(-3) : title;

  const onClick = useCallback((): void => {
  }, []);

  return (
    <Wrapper
      title={`${subject.name} - T${subject.class_num}`}

      variant={variant as keyof typeof colors}
      blocked={(
        availableSubjects.length === numEssentialSubjects &&
        !availableSubjects.filter((subject) => title === subject.name)
      ).toString()}
    >
      <Title>{capitalize(displayedTitle)}</Title>
      <AboutContainer>
        <About onClick={onClick}>Detalhar</About>
      </AboutContainer>
    </Wrapper>
  );
};
