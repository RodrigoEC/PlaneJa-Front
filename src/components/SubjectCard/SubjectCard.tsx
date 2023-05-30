import { ReactElement, useCallback } from "react";
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
  const { name: title, class_num } = subject;

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
      <Title>{capitalize(displayedTitle)} - T{class_num}</Title>
      <AboutContainer>
        <About onClick={onClick}>Remover</About>
      </AboutContainer>
    </Wrapper>
  );
};
